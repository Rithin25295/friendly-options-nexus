
import ProjectDropdown from "@/components/ProjectDropdown";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-2">Create Project</h1>
      <p className="text-gray-600 mb-8">Start a new project or add an existing one to your workspace</p>
      <ProjectDropdown />
    </div>
  );
};

export default Index;
