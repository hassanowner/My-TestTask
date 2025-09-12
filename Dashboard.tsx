import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import { TrackerWidget } from "@/Features/Dashboard/TrackerWidget/TrackerWidget";
import { AgeWidget } from "@/Features/Dashboard/AgeWidget/AgeWidget";
import MainScene from "@/Features/DigitalTwin/Components/Three/Scene/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import CtaModal from "@/Features/Dashboard/CtaModal/CtaModal";
import { ConcernsWidget } from "@/Features/Dashboard/ConcernsWidget/ConcernsWidget";
import { SystemDetailWidget } from "@/Features/Dashboard/SystemDetailWidget/SystemDetailWidget";
import { RootState } from "@/App/Redux/store";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [isNotFirstAnimation, setIsNotFirstAnimation] = useState(false);
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  const [category, setCategory] = useState(selectedCategory || "total");

  // الميزتين المطلوبتين
  const [language, setLanguage] = useState("en");
  const [themeColor, setThemeColor] = useState("#3478f6");

  useEffect(() => {
    if (selectedCategory !== "total") setIsNotFirstAnimation(true);
  }, [selectedCategory]);

  const handleAnimationStart = () => {
    const timeout = setTimeout(() => setCategory(selectedCategory || "total"), 800);
    return () => clearTimeout(timeout);
  };

  return (
    <div className={styles["Dashboard-layout"]} style={{ "--theme-color": themeColor } as any} dir={language === "ar" ? "rtl" : "ltr"}>
      <NavBar />
      <div className={styles["Dashboard-select"]}>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
        <input type="color" value={themeColor} onChange={e => setThemeColor(e.target.value)} />
      </div>

      <CameraProvider>
        <div className={styles["Dashboard-content"]}>
          <div className={styles["Dashboard-dt-container"]}>
            <div className={styles["Dashboard-model"]}>
              <MainScene selectedCategory={selectedCategory || "total"} />
            </div>
          </div>
          <div
            key={selectedCategory}
            className={`${styles["Dashboard-stats"]} ${
              isNotFirstAnimation ? styles["loopAnimation"] : styles["firstAnimation"]
            }`}
            onAnimationStart={handleAnimationStart}
          >
            <TrackerWidget />
            <SystemDetailWidget category={category} />
            <AgeWidget />
            <ConcernsWidget category={category || "total"} />
          </div>
        </div>
      </CameraProvider>

      <CtaModal />
    </div>
  );
};

export default Dashboard;
