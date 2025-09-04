import { Fragment } from "react";

import Header3 from "@/components/common/Header3";
import Header4 from "@/components/common/Header4";
import Paragraph from "@/components/common/Paragraph";
import Row from "@/components/common/Row";
import Section from "@/components/common/Section";
import UnorderedList, {
  UnorderedListProps,
} from "@/components/common/UnorderedList";

import { displayPeriod } from "@/utils/date";
import { mergeClassNames } from "@/utils/mergeClassNames";

import RSS from "@/svgs/rss.svg";
import Anchor from "../common/Anchor";
import TechBadge from "./TechBadge";

interface PositionExpeirence {
  position: string;
  start: Date;
  end?: Date;
  experience: Array<{
    title: string;
    techStack?: string[];
    contents: UnorderedListProps["items"];
    link?: string;
    text?: string;
  }>;
}

export interface CareerPayload {
  name: string;
  start: Date;
  end?: Date;
  description?: string;
  experiences: PositionExpeirence[];
}

export interface WorkExperienceProps {
  careers: CareerPayload[];
}

function WorkExperience({ careers }: WorkExperienceProps) {
  return (
    <Section
      title="Work Experience"
      className="break-before-page"
      // TODO: 웹 이력서 배포용
      // right={
      //   <Badge className="flex h-fit justify-center items-center">
      //     총{" "}
      //     {dateDiff(
      //       careers[careers.length - 1].start ?? new Date(),
      //       careers[0]?.end ?? new Date()
      //     )}
      //   </Badge>
      // }
    >
      {careers.map(({ name, start, end, description, experiences }) => (
        <article className="[&:nth-last-child(n+2)]:mb-12" key={name}>
          <Header3 className="">{name}</Header3>
          <i className="block text-xl mb-4 text-gray-400">
            {displayPeriod(start, end)}
          </i>
          {description && <Paragraph className="mb-8">{description}</Paragraph>}
          {experiences.map(({ position, start, end, experience }) => (
            <Row
              className={
                "[&:nth-last-child(n+2)]:mb-8 max-sm:flex-col max-lg:gap-4 max-sm:first:*:w-[initial]"
              }
              key={`${position}-${start.toString()}`}
              first={
                <div className="sticky print:static top-4 text-gray-400 text-xl italic max-sm:flex max-sm:flex-col-reverse">
                  <div>{position}</div>
                  <div>{displayPeriod(start, end)}</div>
                </div>
              }
              last={
                <>
                  {experience.map(
                    ({ title, text, link, techStack, contents }) => (
                      <Fragment key={title}>
                        <Header4
                          className={mergeClassNames(
                            "flex [&:nth-child(n+2)]:mt-8 max-md:text-[1.05rem]",
                            techStack === undefined ? "mb-2" : ""
                          )}
                        >
                          {text && link ? (
                            <div
                              className={mergeClassNames(
                                "flex items-center gap-2"
                              )}
                            >
                              {title}

                              <RSS
                                className="fill-foreground linear-transition-color"
                                width={13}
                                height={13}
                              />
                              <Anchor
                                className="text-m max-sm:text-[1rem]"
                                target="_blank"
                                href={link}
                              >
                                {text ?? link}
                              </Anchor>
                            </div>
                          ) : (
                            title
                          )}
                        </Header4>
                        {techStack && (
                          <div className="mb-2">
                            {techStack.map((tech) => (
                              <TechBadge className="mr-1" key={tech}>
                                {tech}
                              </TechBadge>
                            ))}
                          </div>
                        )}
                        <UnorderedList items={contents} />
                      </Fragment>
                    )
                  )}
                </>
              }
            />
          ))}
        </article>
      ))}
    </Section>
  );
}

export default WorkExperience;
