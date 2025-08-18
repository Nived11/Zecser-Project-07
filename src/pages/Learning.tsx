import { useSearchParams } from "react-router-dom";
import {
  ChaptersOverview,
  ClassSections,
  CurriculumOverview,
  Heading,
  LectureSection,
  SubjectsOverview,
  UnitsOverview,
} from "../features/learnings";
import type { LearingParam } from "../features/learnings/components/Heading";
import ArrowBack from "../components/buttons/ArrowBack";
import NotFound from "./NotFound";

const Learning = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("class") ?? "";
  const subject = searchParams.get("subject");
  const unit = searchParams.get("unit");
  const chapter = searchParams.get("chapter");

  const isOverview = ["1-4", "5-6"].includes(type);
  const isValidClass = /^(10|[1-9])$/.test(type);

  if (!type) return <CurriculumOverview />;
  if (!isOverview && !isValidClass) return <NotFound noHeader />;

  const isClassSection = !isValidClass && !subject && !unit;
  const isSubjectsSection = isValidClass && !subject && !unit;
  const isUnitsSection = isValidClass && subject && !unit;
  const isChaptersSection = isValidClass && subject && unit && !chapter;
  const isLectureSection = isValidClass && subject && unit && chapter;

  return (
    <div className="pb-20">
      <ArrowBack className="ml-[10px] mt-[20px] md:ml-[30px]" />
      <Heading
        type={type as LearingParam["type"]}
        subject={subject as string}
        unit={unit}
        chapter={chapter}
      />

      {isClassSection && <ClassSections type={type as LearingParam["type"]} />}
      {isSubjectsSection && <SubjectsOverview />}
      {isUnitsSection && <UnitsOverview />}
      {isChaptersSection && <ChaptersOverview />}
      {isLectureSection && <LectureSection />}
    </div>
  );
};

export default Learning;
