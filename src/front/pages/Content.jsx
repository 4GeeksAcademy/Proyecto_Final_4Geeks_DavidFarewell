import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Navbar2 from "../components/Navbar2";
import CarouselContent from "../components/CarouselContent";
import Aurora from "../components/Aurora";
import styles from "../assets/styles/Content.module.css";

const Content = () => {
  // Datos de ejemplo para los carouseles
  const placeholderImage = "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  
  const generateItems = (count) => {
    return Array(count).fill(null).map((_, index) => ({
      thumbnail: placeholderImage,
      title: `Item ${index + 1}`
    }));
  };

  const videos = generateItems(8);
  const podcasts = generateItems(8);
  const tasks = generateItems(8);

  return (
    <ScrollToTop>
      <div className={styles.contentPage}>
        <Aurora
          colorStops={["#8e24aa", "#651fff", "#ff6f61"]}
          blend={0.2}
          amplitude={0.8}
          speed={0.8}
        />
        <div className={styles.contentOverlay}></div>
        <Navbar2 />
        <main className={styles.contentMainArea}>
          <section className={styles.contentSection}>
            <h2 className={styles.contentSectionTitle}>Videos</h2>
            <CarouselContent items={videos} />
          </section>

          <section className={styles.contentSection}>
            <h2 className={styles.contentSectionTitle}>Podcasts</h2>
            <CarouselContent items={podcasts} />
          </section>

          <section className={styles.contentSection}>
            <h2 className={styles.contentSectionTitle}>Tasks</h2>
            <CarouselContent items={tasks} />
          </section>
        </main>
      </div>
    </ScrollToTop>
  );
};

export default Content;
