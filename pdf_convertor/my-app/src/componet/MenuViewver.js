
import { Page, Text, View,Image, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';
import CompanyService from '../service/CompanyService'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 20,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
     
});

// Create Document Component


export default function MyDocument() {

   
  const [companyList, setCompanyList] = useState([]);

    //const [customerLoaded, setCustomerLoaded] = useState(false)

    useEffect(() => {async function loadCompanies(){
            
            setCompanyList(await CompanyService.getCompanyList())
            //setCustomerLoaded(true)
           
        }
        loadCompanies()
    }, [companyList]);
 
    return (

        <Document>
          {companyList.map((company) =>
        console.log(company.name))}  
         {/* {companyList[0].name}   */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Section #1</Text>
      </View>
      <Text style={styles.text}>company id:{companyList.map((company) =>
        company.name)}     
      </Text>
      <View style={styles.section}>
      <Text style={styles.text}>
        Casi todo aquel día caminó sin acontecerle cosa que de contar fuese, de
        lo cual se desesperaba, porque quisiera topar luego luego con quien
        hacer experiencia del valor de su fuerte brazo. Autores hay que dicen
        que la primera aventura que le avino fue la del Puerto Lápice, otros
        dicen que la de los molinos de viento; pero lo que yo he podido
        averiguar en este caso, y lo que he hallado escrito en los anales de la
        Mancha, es que él anduvo todo aquel día, y, al anochecer, su rocín y él
        se hallaron cansados y muertos de hambre, y que, mirando a todas partes
        por ver si descubriría algún castillo o alguna majada de pastores donde
        recogerse y adonde pudiese remediar su mucha hambre y necesidad, vio, no
        lejos del camino por donde iba, una venta,que fue como si viera una
        estrella que, no a los portales, sino a los alcázares de su redención le
        encaminaba. Diose priesa a caminar, y llegó a ella a tiempo que
        anochecía.
      </Text>
      <Image
        style={styles.image}
        src="./2.jpg"
      />
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
    )
}


const App = () => (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )

// ReactPDF.render(<MyDocument />);
