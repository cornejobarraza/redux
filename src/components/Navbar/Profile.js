import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLongPress } from "use-long-press";

import { useViewport } from "hooks";

export { Profile };

function Profile({ user }) {
  const [isTooltipToggled, setIsTooltipToggled] = useState(false);
  const { width } = useViewport();
  const linkRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Hide searchbar when clicking outside of it
      if (isTooltipToggled && !linkRef.current?.contains(e.target)) {
        setIsTooltipToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTooltipToggled]);

  const longPressBind = useLongPress(
    width < 1024
      ? () => {
          setIsTooltipToggled(true);
        }
      : null,
    {
      onStart: () => {
        if (isTooltipToggled) {
          setIsTooltipToggled(false);
        }
      },
      threshold: 200,
      //   onFinish: () => {
      //     const timeout = setTimeout(() => toggleTooltip(), 400);

      //     const toggleTooltip = () => {
      //       clearTimeout(timeout);
      //       tooltipRef.current.classList.remove("scale-100");
      //     };
      //   },
    }
  );

  return (
    <div className="account">
      <Link
        className="group"
        to="settings"
        ref={linkRef}
        onContextMenu={(e) => e.preventDefault()}
        {...longPressBind()}
      >
        <img
          className="avatar"
          src={user?.avatar}
          alt=""
          aria-label="User avatar"
          width="32px"
          height="32px"
          referrerPolicy="no-referrer"
        />
        <small className={isTooltipToggled ? "info-tooltip scale-100" : "info-tooltip"}>
          <span className="block font-bold">{user?.name}</span>
          <span className="block">{user?.email}</span>
        </small>
      </Link>
    </div>
  );
}
