import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    width: "100%",
    gap: "12px",
  },
  container_professional: {
    width: "100%",
    height: "100%",
    gap: "12px",
    padding: "12px",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: "11px",
    textAlign: "justify",
  },
  section_top: {
    height: "23%",
    width: "100%",
    display: "flex",
    paddingTop: "15px",
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingBottom: "28px",
    gap: "8px",
    backgroundColor: "#f8f9f9",
  },
  section_right: {
    width: "35%",
    height: "67%",
    paddingRight: "16px",
    gap: "12px",
  },
  section_left: {
    width: "65%",
    height: "67",
    paddingLeft: "16px",
    gap: "12px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  job: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    width: "100%",
    height: "auto",
  },
  content_right: {
    fontSize: "14px",
    fontWeight: "bold",
    text: {
      fontSize: "11px",
    },
  },
  merge_content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "7px",
  },
  icons: {
    width: "11px",
    height: "11px",
  },
  link: {
    fontSize: "11px",
    color: "#000000",
    textDecoration: "none",
  },
  merge_content_col: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  textArea: {
    lineHeight: "1.5px",
  },
});
