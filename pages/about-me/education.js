import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'

export default function Education() {
  return(
    <Layout>
    <Head>
       <title>Matthew Mahoney | Education</title>
     </Head>
      <h1>Education</h1>
      <Image  priority
              src="/images/diploma.jpg"
              height={1200}
              width={1600}
              alt={name}/>
      <p>(You can validate the diploma by clicking{" "}
        <a  href ="https://registrar.vanderbilt.edu/cecredential/validate.php"
            style={{textDecorationLine: "underline"}}>
          here
        </a>
        {" "} and entering the code <br/>191X-MQ4L-MGYH.)
      </p>
    </Layout>
  )
}
