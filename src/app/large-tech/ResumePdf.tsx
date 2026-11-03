import { Children, isValidElement, type ReactNode } from "react";
import { Document, Font, Link, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import {
  profilePayload,
  introducePayload,
  skillPayload,
  workExperiencePayload,
  otherExperiencePayload,
  educationPayload,
} from "@/payload/sr_k/large-tech";
import { displayPeriod } from "@/utils/date";

const styles = StyleSheet.create({
  page: { padding: 36, fontFamily: "ResumeSans", fontSize: 9.5, lineHeight: 1.6, color: "#212529" },
  profile: { flexDirection: "row", alignItems: "center", minHeight: 40, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: 600, lineHeight: 1.5, minHeight: 36, width: 100, flexShrink: 0 },
  contact: { fontSize: 9.5, lineHeight: 1.6, marginLeft: 18 },
  link: { color: "#52616e", textDecoration: "underline" },
  section: { fontSize: 16, fontWeight: 600, color: "#379ad3", borderBottomWidth: 0.6, borderBottomColor: "#cbd0d5", paddingBottom: 5, marginTop: 18, marginBottom: 12 },
  paragraph: { marginBottom: 9 },
  company: { fontSize: 14, fontWeight: 600, marginTop: 10 },
  muted: { color: "#68727c", fontSize: 9, marginBottom: 5 },
  project: { fontSize: 11, fontWeight: 600, marginTop: 12, marginBottom: 4 },
  category: { fontSize: 10, fontWeight: 600, marginTop: 5, marginBottom: 3 },
  bullet: { flexDirection: "row", marginBottom: 5 },
  bulletMarker: { width: 9, flexShrink: 0 },
  bulletText: { flex: 1 },
  bold: { fontWeight: 600 },
});

function inlineContent(value: ReactNode): ReactNode {
  return Children.toArray(value).map((child, index) => {
    if (typeof child === "string" || typeof child === "number") return child;
    if (!isValidElement<{ children?: ReactNode; href?: string }>(child)) return null;
    const children = inlineContent(child.props.children);
    return child.props.href ? (
      <Link key={index} src={child.props.href} style={styles.link}>{children}</Link>
    ) : children;
  });
}

function bulletList(items: unknown[], depth = 0): ReactNode {
  return items.map((item, index) => {
    if (Array.isArray(item)) return <View key={index} style={{ marginLeft: 10 }}>{bulletList(item, depth + 1)}</View>;
    const isBold = typeof item === "object" && item !== null && "bold" in item && "value" in item;
    const value = isBold ? item.value as ReactNode : item as ReactNode;
    if (!value) return null;
    return (
      <View key={index} wrap={false} style={styles.bullet}>
        <Text style={styles.bulletMarker}>-</Text>
        <Text style={[styles.bulletText, isBold ? styles.bold : {}]}>{inlineContent(value)}</Text>
      </View>
    );
  });
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.section} minPresenceAhead={children === "Work Experience" ? 200 : 65}>{children}</Text>;
}

function ResumeDocument() {
  return (
    <Document title="김태현 경력기술서" author="김태현" language="ko">
      <Page size="A4" style={styles.page}>
        <View style={styles.profile} wrap={false}>
          <Text style={styles.name}>{profilePayload.name}</Text>
          {profilePayload.contacts.map(contact => (
            <Text key={contact.link} style={styles.contact}>
              <Link src={contact.link} style={styles.link}>
                {contact.text}
              </Link>
            </Text>
          ))}
        </View>
        <SectionTitle>Introduce</SectionTitle>
        {introducePayload.map((paragraph, index) => <Text key={index} style={styles.paragraph}>{inlineContent(paragraph)}</Text>)}
        <SectionTitle>Skill</SectionTitle>
        {skillPayload.map(skill => (
          <View key={skill.category} wrap={false}>
            <Text style={styles.category}>{skill.category}</Text>
            {bulletList(skill.list)}
          </View>
        ))}
        <SectionTitle>Work Experience</SectionTitle>
        {workExperiencePayload.map((company, companyIndex) => (
          <View key={company.name}>
            <Text break={companyIndex > 0} style={styles.company} minPresenceAhead={180}>{company.name}</Text>
            <Text style={styles.muted}>{displayPeriod(company.start, company.end)}</Text>
            {company.description && <Text style={styles.paragraph}>{company.description}</Text>}
            {company.experiences.map((role, index) => (
              <View key={index}>
                <Text style={styles.muted} minPresenceAhead={55}>{role.position} / {displayPeriod(role.start, role.end)}</Text>
                {role.experience.map(project => (
                  <View key={project.title} wrap={false}>
                    <Text style={styles.project} minPresenceAhead={65}>
                      {project.title}
                      {project.link && project.text && <>{"  "}<Link src={project.link} style={styles.link}>{project.text}</Link></>}
                    </Text>
                    {project.techStack && <Text style={styles.muted}>{project.techStack.join(", ")}</Text>}
                    {bulletList(project.contents)}
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
        <SectionTitle>Other Experience</SectionTitle>
        {otherExperiencePayload.map(experience => (
          <View key={experience.title} wrap={false}>
            <Text style={styles.category}>
              {"- "}
              {experience.link ? <Link src={experience.link} style={styles.link}>{experience.title}</Link> : experience.title}
            </Text>
            {experience.start && <Text style={styles.muted}>{displayPeriod(experience.start, experience.end)}</Text>}
            {bulletList(experience.descriptions)}
          </View>
        ))}
        <SectionTitle>Education</SectionTitle>
        {educationPayload.map(education => (
          <View key={education.name} wrap={false}>
            <Text style={styles.category}>{education.name}</Text>
            {education.department && <Text>{education.department}</Text>}
            {education.start && <Text style={styles.muted}>{displayPeriod(education.start, education.end)}</Text>}
            {education.degree && <Text>{education.degree}</Text>}
            {education.activities.map(activity => (
              <View key={activity.title}>
                <Text style={styles.category}>{activity.title}</Text>
                {activity.descriptions && bulletList(activity.descriptions)}
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}

export async function createResumePdf(origin: string) {
  Font.register({
    family: "ResumeSans",
    fonts: [
      { src: new URL("/sr_k/fonts/ResumeSans-Regular.ttf", origin).href, fontWeight: 400 },
      { src: new URL("/sr_k/fonts/ResumeSans-SemiBold.ttf", origin).href, fontWeight: 600 },
    ],
  });
  Font.registerHyphenationCallback(word => [word]);
  return pdf(<ResumeDocument />).toBlob();
}
