import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExamPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const examRoot = document.getElementById("exam-root");
    if (examRoot) launchFullScreen(examRoot);

    // Event handlers
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement &&
          !document.webkitFullscreenElement &&
          !document.mozFullScreenElement &&
          !document.msFullscreenElement) {
        alert("You exited full screen. Submitting exam.");
        submitExamAutomatically();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        alert("Tab switch detected. Submitting exam.");
        submitExamAutomatically();
      }
    };

    const handleWindowBlur = () => {
      alert("Window focus lost. Submitting exam.");
      submitExamAutomatically();
    };

    const disableRightClick = (e) => e.preventDefault();

    const disableKeys = (e) => {
      if (e.ctrlKey && ["u", "s", "c"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };

    // Add listeners
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);

    return () => {
      // Remove listeners
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const launchFullScreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const submitExamAutomatically = () => {
    // Add your submission logic here (API call, Redux action, etc.)
    // For demo: redirect to a result/submission page
    navigate("/exam-submitted");
  };

  return (
    <div id="exam-root" className="p-4">
      <h1 className="text-2xl font-bold">Exam In Progress</h1>
      {/* Exam content goes here */}
    </div>
  );
};

export default ExamPage;
