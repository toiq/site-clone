import { Button } from "@/components/button";
import { ProjectCard } from "./project-card";

export const ProjectsContent = () => {
  return (
    <div className="font-manrope">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[1.4px] text-secondary">
            Our Projects
          </p>
          <p className="mt-3 text-[32px] font-[900] leading-[44px] text-primary">
            Our latest cool projects.
          </p>
        </div>
        <Button variant="outline" size="small" className="text-base">
          Check our work
        </Button>
      </div>

      <div className="mt-20 w-full columns-2 gap-x-20">
        <ProjectCard
          imgSrc="https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fbilly.webp&w=1920&q=75"
          title="Billy - Insurance Platform"
          content={
            <p className="text-secondary">
              <span className="font-semibold">Billy</span> - Insurance and risk
              management platform built for construction and real estate.
            </p>
          }
          width={520}
          height={500}
        />

        <ProjectCard
          imgSrc="https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fmaster-pos.webp&w=1920&q=75"
          title="Billy - Insurance Platform"
          content={
            <p className="text-secondary">
              <span className="font-semibold">Billy</span> - Insurance and risk
              management platform built for construction and real estate.
            </p>
          }
          width={520}
          height={500}
        />

        <ProjectCard
          imgSrc="https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fhubdeck.webp&w=1920&q=75"
          title="Billy - Insurance Platform"
          content={
            <p className="text-secondary">
              <span className="font-semibold">Billy</span> - Insurance and risk
              management platform built for construction and real estate.
            </p>
          }
          width={520}
          height={700}
        />

        <ProjectCard
          imgSrc="https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fthe-swag.webp&w=1920&q=75"
          title="Billy - Insurance Platform"
          content={
            <p className="text-secondary">
              <span className="font-semibold">Billy</span> - Insurance and risk
              management platform built for construction and real estate.
            </p>
          }
          width={520}
          height={500}
        />
      </div>
    </div>
  );
};
