/* eslint-disable jsx-a11y/alt-text */
"use client";

import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Image,
  Link,
} from "@react-pdf/renderer";
import { Personal, Professional } from "@/app/store/form";
import { styles } from "./styles";

interface ResumeProps {
  personal: Personal;
  professional: Professional;
}

export function Resume({ personal, professional }: ResumeProps) {
  return (
    <>
      <PDFViewer
        showToolbar={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Document>
          <Page size="A4" style={styles.page} wrap>
            <View style={styles.container}>
              <View style={styles.section_top}>
                <Text style={styles.title}>{personal.fullname}</Text>
                <Text style={styles.job}>{personal.jobTitle}</Text>
                <Text style={[styles.text, styles.textArea]}>
                  {professional.profSummary}
                </Text>
              </View>
              <View style={styles.container_professional}>
                <View style={styles.section_left}>
                  <View style={styles.content}>
                    <Text>Experiência Profissional</Text>
                    <Text style={styles.text}>
                      {professional.profExperience}
                    </Text>
                  </View>
                  <View style={styles.content}>
                    <Text>Educação</Text>
                    <Text style={styles.text}>{professional.education}</Text>
                  </View>
                  <View style={styles.content}>
                    <Text>Projetos</Text>
                    <Text style={styles.text}>{professional.projects}</Text>
                  </View>
                  {professional.addInfo && (
                    <View style={styles.content}>
                      <Text>Outras Informações</Text>
                      <Text style={styles.text}>{professional.addInfo}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.section_right}>
                  <View style={styles.content}>
                    <Text style={styles.content_right}>Contato</Text>
                    <View style={styles.merge_content}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_ICON_URL}id=12580&format=png`}
                        style={styles.icons}
                      />
                      <Text style={styles.content_right.text}>
                        {personal.email}
                      </Text>
                    </View>
                    <View style={styles.merge_content}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_ICON_URL}id=9659&format=png`}
                        style={styles.icons}
                      />
                      <Text style={styles.content_right.text}>
                        {personal.phone}
                      </Text>
                    </View>
                    <View style={styles.merge_content}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_ICON_URL}id=3723&format=png`}
                        style={styles.icons}
                      />
                      <View style={styles.merge_content_col}>
                        <Text style={styles.content_right.text} break>
                          {personal.address}
                        </Text>
                        <Text style={styles.content_right.text}>
                          {personal.city} - {personal.state}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.merge_content}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_ICON_URL}id=8808&format=png`}
                        style={styles.icons}
                      />
                      <Link
                        style={styles.link}
                        src={`https://www.linkedin.com/in/${personal.linkedin}`}
                      >
                        {personal.linkedin}
                      </Link>
                    </View>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.content_right}>Habilidades</Text>
                    <Text style={[styles.text, styles.textArea]}>
                      {professional.technicalSkills}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}
