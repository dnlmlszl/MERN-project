import React from "react"
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing"
import { Link, Navigate } from "react-router-dom";
import { Logo } from "../components";
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext()
  return (
    <React.Fragment>
      { user && <Navigate to="/" /> }
      <Wrapper>
        <nav>
        <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby ugh distillery typewriter direct trade cred, four dollar
              toast vape williamsburg asymmetrical forage copper mug celiac vice
              meh. Tumeric hoodie gentrify air plant, prism meggings try-hard vape
              keytar succulents yuccie raw denim thundercats pinterest yes plz.
            </p>
            <Link to="/register" className="btn btn-hero">Login / Register</Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

// const Wrapper = styled.main`
//     nav {
//         width: var(--fluid-width);
//         max-width: var(--max-width);
//         margin: 0 auto;
//         height: var(--nav-height);
//         display: flex;
//         align-items: center;
//     }

//     .page {
//         min-height: calc(100vh - var(--nav-height));
//         display: grid;
//         align-items: center;
//         margin-top: -3rem;
//     }

//     h1 {
//         font-weight: 700;
//         span {
//             color: var(--primary-500);
//         }
//     }

//     p {
//         color: var(--grey-600);
//     }

//     .main-img {
//         display: none;
//     }

//     @media (min-width: 992px) {
//         .page {
//             grid-template-columns: 1fr 1fr;
//             column-gap: 3rem;
//         }

//         .main-img {
//             display: block;
//         }
//     }
// `

export default Landing;
