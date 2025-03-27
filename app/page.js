export default function Home() {
  return (
    <section className="mainSection">
        <main>
            <div className="leftSideMain">
                 <img src="/images/ellipse.png" alt="ellipse" className="firstEllipse ellipseImg"  />
                 <img src="/images/ellipse.png" alt="ellipse" className="secondEllipse ellipseImg"  />
                 <img src="/images/ellipse.png" alt="ellipse" className="thirdEllipse ellipseImg"  />
                 <img src="/images/whiteStar.png" alt="star" className="whiteStar"  />
                <h1>simplify learning with our platform.</h1>
                 <img src="/images/curvLine.png" alt="curv Line" className="curvLine"  />
                <p>Lorem amet consectetur adipisicing elit. Architecto fuga, ullam doloremque fugit provident dolorum et
                    dolore adipisci nihil .</p>
                 <img src="/images/whiteStar.png" alt="star" className="whiteStarSecond"  />
                 <img src="/images/curlyLine.png" alt="curly Line" className="curliImgFirst"  />
                 <img src="/images/curlyLine.png" alt="curly Line" className="curliImgSecond"  />
                 <img src="/images/adorableKid.png" alt="kid" className="kidImg"  />
                 <img src="/images/grayStar.png" alt="gray Star" className="grayStar1"  />
                 <img src="/images/grayStar.png" alt="gray Star" className="grayStar2"  />
                 <img src="/images/grayStar.png" alt="gray Star" className="grayStar3"  />
                 <img src="/images/grayStar.png" alt="gray Star" className="grayStar4"  />
                 <img src="/images/beeLight.png" alt="honeyBee" className="bee"  />
            </div>
            <div className="rightSideMain">
                <div className="formSideDiv">
                     <img src="/images/orangeCap.png" alt="cap logo" className="capIcon"  />
                     <img src="/images/capIcon2.png" alt="cap logo" className="capIcon2"  />
                </div>
                <div className="logoAndHeading">
                     <img src="/images/logo.png" alt=""  />
                    <h2>Welcome Back</h2>
                    <p>Please login to your acoount</p>
                </div>
                <div className="formField">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <span>Forgot password?</span>
                    <button>Submit</button>
                </div>
                <div className="accSuggestion">
                    <p>Don't have an acoount? <span className="signUp">Sign Up</span></p>
                </div>
                 <img src="/images/pencilIcon.png" alt="pencilIcon" className="pencilIcon"  />
            </div>
        </main>
    </section>
  );
}
