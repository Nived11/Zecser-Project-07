export type LearingParam = {
  type: "1-4" | "5-6" | number;
  subject?: string;
  unit?: string | null;
  chapter?: string | null;
};

const Heading = ({ type, subject, chapter, unit }: LearingParam) => {
  const heading =
    type === "1-4"
      ? "LP School"
      : type === "5-6"
      ? "High School"
      : `Class ${type}`;

  let subheading;
  if (type === "1-4" || type === "5-6") subheading = "Learn Class Wise";
  else if (type && subject && unit && chapter) subheading = `Unit ${unit} : Chapter ${unit}`;
  else if (type && subject && unit) subheading = `Unit ${unit}`;
  else if (type && subject) subheading = `Step into the World of ${subject}!`;
  else if (type)
    subheading = `Explore the curriculum & activities for Class ${type}`;
  return (
    <div className="p-[20px] text-center space-y-2 md:space-y-4 pb-0">
      <h1 className="text-primary font-extrabold text-2xl md:text-3xl xl:text-4xl">
        {heading} {subject && `: ${subject}`}
      </h1>
      <p className="text-lg md:text-xl xl:text-2xl font-medium text-primary italic">
        — {subheading} —
      </p>
    </div>
  );
};

export default Heading;
