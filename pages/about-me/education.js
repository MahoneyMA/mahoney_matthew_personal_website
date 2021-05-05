import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'
const name = "Matthew's Diploma"
export default function Education() {

  const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = "191X-MQ4L-MGYH";
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

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
      <p>You can validate the diploma by clicking{" "}
        <a  href ="https://registrar.vanderbilt.edu/cecredential/validate.php"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecorationLine: "underline"}}>
          here
        </a>
        {" "} and entering the code <br/>
        <u type="text" id="code">191X-MQ4L-MGYH</u> <button onClick={copyToClipboard}>Copy code to clipboard</button>
      </p>
      <p> I've noticed the code cannot be copied and pasted onto the linked website,
          it must be typed. Sorry!</p>
    </Layout>
  )
}
