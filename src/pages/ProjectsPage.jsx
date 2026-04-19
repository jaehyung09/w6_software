import React from "react";
import ProjectCard from "../components/ProjectCard";
import sampleImage from "../assets/calcu.png";

const ProjectsPage = () => {
  const projects = [
    {
      title: "나의 프로젝트1",
      description: "React를 사용하여 만든 계산기 애플리케이션",
      image: sampleImage,
    },
    {
      title: "나의 프로젝트2",
      description: "캡스톤 프로젝트에서 진행한 딥러닝 기반 영상 분류 시스템",
    },
    {
      title: "나의 프로젝트3",
      description: "나만의 맛집 정리 리스트",
      link: "https://map.naver.com/p/entry/place/18697937?c=15.00,0,0,0,dh",
    },
    {
      title: "나의 프로젝트4",
      description: "광혈류 측정 기반 집중도 측정 시스템",
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
