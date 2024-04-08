import FeaturedProjectCard from "~/modules/Featured/FeaturedProjectCard";

const useGetTestProjects = () => {
  const testProjects = (count: number) => {
    const numOfTestProjects = count;
    const testProjects = [];
    for (let i = 0; i < numOfTestProjects; i++) {
      testProjects.push(
        <FeaturedProjectCard
          key={i}
          title="Example Title"
          description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
        />
      );
    }
    return testProjects;
  };
  return { testProjects };
};

export default useGetTestProjects;
