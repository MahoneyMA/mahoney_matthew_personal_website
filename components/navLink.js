import Link from 'next/link';
import{useRouter} from 'next/router';

export const NavLink =(link, name)=>{
  const router = useRouter();

  return(
      <div>
        <Link href = {link}>
          <a className = {router.pathname == link ? "active": ""}>{name}</a>
        </Link>
      </div>    
  )
}
