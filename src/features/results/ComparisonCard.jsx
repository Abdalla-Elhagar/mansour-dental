import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

function ComparisonSurface({
  item,
  split,
  onSplitChange,
  onExpand,
  imageButtonRef,
}) {
  const frameRef = useRef(null);

  function updateSplit(clientX) {
    const bounds = frameRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    onSplitChange(Math.min(100, Math.max(0, next)));
  }

  function handlePointerDown(event) {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    updateSplit(event.clientX);
  }

  function handlePointerMove(event) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      updateSplit(event.clientX);
    }
  }

  function handleKeyDown(event) {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      onSplitChange(
        Math.min(
          100,
          Math.max(0, split + (event.key === "ArrowRight" ? step : -step)),
        ),
      );
    } else if (event.key === "Home") {
      event.preventDefault();
      onSplitChange(0);
    } else if (event.key === "End") {
      event.preventDefault();
      onSplitChange(100);
    }
  }

  return (
    <div
      className="comparison"
      ref={frameRef}
      style={{ "--comparison-split": `${split}%` }}
    >
      <button
        ref={imageButtonRef}
        className="comparison__image"
        type="button"
        onClick={onExpand}
        disabled={!onExpand}
        aria-label={`تكبير مقارنة ${item.title} قبل وبعد`}
      >
        <img
          className="comparison__before"
          src={item.before}
          alt=""
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <img
          className="comparison__after"
          src={item.after}
          alt=""
          loading="lazy"
          decoding="async"
          draggable="false"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        />
        <span className="comparison__label comparison__label--before">قبل</span>
        <span className="comparison__label comparison__label--after">بعد</span>
        {onExpand && (
          <span className="comparison__expand" aria-hidden="true">
            <Maximize2 size={17} />
          </span>
        )}
      </button>
      <div
        className="comparison__slider"
        role="slider"
        tabIndex={0}
        aria-label={`اسحب لمقارنة صور ${item.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split)}
        aria-valuetext={`${Math.round(split)}% من صورة بعد`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onKeyDown={handleKeyDown}
      >
        <span className="comparison__divider" aria-hidden="true">
          <span className="comparison__knob">↔</span>
        </span>
      </div>
    </div>
  );
}

export default function ComparisonCard({ item }) {
  const [split, setSplit] = useState(50);
  const [expanded, setExpanded] = useState(false);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!expanded) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [expanded]);

  return (
    <>
      <article className="result-card">
        <div className="result-card__comparison">
          <ComparisonSurface
            item={item}
            split={split}
            onSplitChange={setSplit}
            onExpand={() => setExpanded(true)}
            imageButtonRef={triggerRef}
          />
        </div>
        <div className="result-card__info">
          <div>
            <span className="result-card__treatment">{item.treatment}</span>
            <h3>{item.title}</h3>
          </div>
          <span className="result-card__hint">اسحب الخط للمقارنة</span>
        </div>
      </article>

      {expanded && (
        <div
          className="result-lightbox"
          role="presentation"
          onClick={() => setExpanded(false)}
        >
          <div
            className="result-lightbox__content"
            role="dialog"
            aria-modal="true"
            aria-label={`مقارنة ${item.title} قبل وبعد`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              className="result-lightbox__close"
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="إغلاق العرض المكبر"
            >
              <X size={22} />
            </button>
            <ComparisonSurface
              item={item}
              split={split}
              onSplitChange={setSplit}
            />
            <div className="result-lightbox__caption">
              <span>{item.treatment}</span>
              <h2>{item.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
