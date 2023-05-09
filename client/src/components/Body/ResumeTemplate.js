import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

export function Resume({ data, image }) {
    const nSkills = data.skills.split(",").map(str => str.trim());
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#E4E4E4',
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 40,
          paddingRight: 40,
        },
        section: {
          marginBottom: 5,
          padding: 5,
        },
        title: {
          fontSize: 36,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#002D62',
          textTransform: 'uppercase',
          letterSpacing: 3,
          borderBottom: '2 solid #002D62',
        },
        subtitle: {
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 5,
          color: '#002D62',
          textTransform: 'uppercase',
          letterSpacing: 2,
        },
        content: {
          fontSize: 12,
          marginBottom: 5,
          color: '#2E2E2E',
        },
        divider: {
          margin: '10px 0',
          borderBottom: '1 solid #E4E4E4',
        },
        image: {
            marginBottom: 10,
            width: 150,
            height: 150,
            borderRadius: 75,
            objectFit: 'cover',
          },
          unorderedList: {
            marginLeft: 10,
            marginTop: 5,
          },
          listItem: {
            fontSize: 12,
            marginBottom: 5,
            color: '#2E2E2E',
          },
      });
  
    return (
      <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Image src={image} style={styles.image} />
        </View>
        <View style={styles.section}>
            <Text style={styles.title}>{data.firstName} {data.lastName}</Text>
            <Text style={styles.content}>{data.intro}</Text>
            <Text style={styles.content}>Email: {data.email}</Text>
            <Text style={styles.content}>Phone: {data.phone}</Text>
            <Text style={styles.content}>Address: {data.address}</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>Skills</Text>
            <View style={styles.unorderedList}>
                <Text style={styles.listItem}>{nSkills[0]}</Text>
                <Text style={styles.listItem}>{nSkills[1]}</Text>
                <Text style={styles.listItem}>{nSkills[2]}</Text>
                <Text style={styles.listItem}>{nSkills[3]}</Text>
            </View>
          <View style={styles.section} />
            <Text style={styles.subtitle}>Experience</Text>
            <Text style={styles.content}>Job Title: {data.jobTitle}</Text>
            <Text style={styles.content}>Company Name: {data.companyName}</Text>
            <Text style={styles.content}>Location: {data.location}</Text>
            <Text style={styles.content}>Starting Date: {data.jobStartDate}</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>Post Graduation</Text>
            <Text style={styles.content}>College: {data.postgradCollge}</Text>
            <Text style={styles.content}>Degree: {data.postgradDegree}</Text>
            <Text style={styles.content}>CGPA: {data.postgradCGPA}</Text>
            <Text style={styles.content}>Passing Year: {data.postgradPassingYear}</Text>
        </View>
        </Page>
      </Document>
    );
  }
  