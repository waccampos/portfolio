"use client";

interface SectionTitleProps {
  title: string;
  description: string;
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <h2 className="text-3xl font-bold">{props.title}</h2>
      <p className="text-muted-foreground mt-4">{props.description}</p>
    </>
  );
}
