import FeaturedProjectCard from "../../../modules/FeaturedProjectCard";
import {FeaturedProjectCategories} from "@/utils/types/projects";

function useFetchTestProjects() {
  const testProjects = (count: number) => {
    const numOfTestProjects = count;
    const testProjects = [];
    for (let i = 0; i < numOfTestProjects; i++) {
      testProjects.push(
        <FeaturedProjectCard
          key={i}
          categorySlug={FeaturedProjectCategories.nextjs}
          description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
          title="Example Title"
          url="/"
        />
      );
    }
    return testProjects;
  };
  return {testProjects};
}

export default useFetchTestProjects;