import Newsletter from "./components/newsletter";
import Hero from "./components/hero";
import React from "react";
import RecentPosts from "./components/recentposts";
import { FadeIn } from "./components/fadein";
import ContactForm from "./components/contact";
import styles from "./components/moving-border.module.css";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen"><Hero/></div>
      <div className="bg-white">
      <div className="mb-10 md:mb-0 h-fit mx-2">
        <RecentPosts/>
      </div>
      </div>
      <div className="min-h-screen">
        <Newsletter/>
        <div
        className={`${styles.wavesWrapper}`}>
        <svg className={`${styles.wrapper} opacity-1`} viewBox="0 0 1920 240" ><path d="M1920,240C1710.6666666666667,251,213.83333333333334,247.33333333333334,0,240C-213.83333333333334,232.66666666666666,427.66666666666663,207,637,196C846.3333333333334,185,1042.1666666666667,166.66666666666666,1256,174C1469.8333333333333,181.33333333333334,2129.3333333333335,229,1920,240C1710.6666666666667,251,213.83333333333334,247.33333333333334,0,240" fill="#E2E8F0"/></svg>
        <svg className={`${styles.wrapper} opacity-30`}  viewBox="0 0 1920 240" ><path d="M1920,240C1621.6666666666667,241.16666666666666,299.3333333333333,254.33333333333334,0,240C-299.3333333333333,225.66666666666666,82.5,160.33333333333334,124,154C165.5,147.66666666666666,205.83333333333334,206.66666666666666,249,202C292.1666666666667,197.33333333333334,340.3333333333333,122.33333333333333,383,126C425.6666666666667,129.66666666666666,463.3333333333333,224.5,505,224C546.6666666666666,223.5,589.6666666666666,126.66666666666667,633,123C676.3333333333334,119.33333333333333,722.1666666666666,189,765,202C807.8333333333334,215,848,199.33333333333334,890,201C932,202.66666666666666,974,218.66666666666666,1017,212C1060,205.33333333333334,1104.6666666666667,171.33333333333334,1148,161C1191.3333333333333,150.66666666666666,1234,139.83333333333334,1277,150C1320,160.16666666666666,1363.6666666666667,226.66666666666666,1406,222C1448.3333333333333,217.33333333333334,1488.6666666666667,134.33333333333334,1531,122C1573.3333333333333,109.66666666666667,1616.8333333333333,129.5,1660,148C1703.1666666666667,166.5,1746.6666666666667,217.66666666666666,1790,233C1833.3333333333333,248.33333333333334,2218.3333333333335,238.83333333333334,1920,240C1621.6666666666667,241.16666666666666,299.3333333333333,254.33333333333334,0,240" fill="#E2E8F0"/></svg>
        <svg className={`${styles.wrapper} opacity-50`}  viewBox="0 0 1920 240" ><path d="M1920,240C1600.8333333333333,255.5,286,250.33333333333334,0,240C-286,229.66666666666666,134,191.33333333333334,204,178C274,164.66666666666666,348.8333333333333,161,420,160C491.1666666666667,159,559.8333333333334,160.33333333333334,631,172C702.1666666666666,183.66666666666666,775.5,233.83333333333334,847,230C918.5,226.16666666666666,988.1666666666666,159.33333333333334,1060,149C1131.8333333333333,138.66666666666666,1206,158.33333333333334,1278,168C1350,177.66666666666666,1421,202.66666666666666,1492,207C1563,211.33333333333334,1633.5,204,1704,194C1774.5,184,1879,139.33333333333334,1915,147C1951,154.66666666666666,2239.1666666666665,224.5,1920,240C1600.8333333333333,255.5,286,250.33333333333334,0,240" fill="#E2E8F0"/></svg>
        <svg className={`${styles.wrapper} opacity-70`}  viewBox="0 0 1920 240"><path d="M1920,240C1633.1666666666667,254,289.3333333333333,242.83333333333334,0,240C-289.3333333333333,237.16666666666666,121.5,231.66666666666666,184,223C246.5,214.33333333333334,310.3333333333333,188,375,188C439.6666666666667,188,507.5,216.66666666666666,572,223C636.5,229.33333333333334,698.6666666666666,227.5,762,226C825.3333333333334,224.5,887.3333333333334,212.66666666666666,952,214C1016.6666666666666,215.33333333333334,1085.6666666666667,247.33333333333334,1150,234C1214.3333333333333,220.66666666666666,1274.8333333333333,143.66666666666666,1338,134C1401.1666666666667,124.33333333333333,1465.1666666666667,172.33333333333334,1529,176C1592.8333333333333,179.66666666666666,1655.8333333333333,145.33333333333334,1721,156C1786.1666666666667,166.66666666666666,2206.8333333333335,226,1920,240C1633.1666666666667,254,289.3333333333333,242.83333333333334,0,240" fill="#E2E8F0"/></svg>
      </div>
      <div className="bg-[#E2E8F0] lg:h-[58vh] h-auto py-4">
        <div className="mx-2">
          <ContactForm />
          </div>
        </div>
        </div>
    </div>
  );
}


