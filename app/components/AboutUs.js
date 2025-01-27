import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faClock, faAward } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    // <      <!--  About us-->
    <section className="bg-background ">
      <div className="div-cont">
        <h1 className="h1 text-center">Who we are</h1>
        <div className="px-8 py-7 md:grid  gap-5 md:grid-cols-2 ">
          {/* <!-- left --> */}
          <div id="left" className=" md:py-20  mr-3">
            <p className=" font-light text-justify text-sm mb-6">
              Økern Bilauksjon AS ble etablert i 1992, og er i dag norges
              største auksjonshus som blir flittig benyttet av privatmarkedet.
              Årsaken til dette er at vi har en effektiv og kundevennlig
              auksjon, med de laveste salærene for bilauksjoner i Norge. Vi har
              tilknyttet oss medarbeidere med over 30 års erfaring fra
              bilauksjonsmarkedet, grunnet vår lange bransjeerfaring blir vi
              også benyttet av flere forsikringsselskaper som såkalt
              priseveileder.
            </p>
            <div className="grid  grid-cols-2 gap-5 ">
              <figure className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faShield} className="text-primary" />
                <p>1000+ Happy Customers</p>
              </figure>
              <figure className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faClock} className="text-primary" />
                <p>1000+ Happy Customers</p>
              </figure>
              <figure className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faAward} className="text-primary" />
                <p>1000+ Happy Customers</p>
              </figure>
            </div>
          </div>
          {/* <!-- right --> */}
          <div
            id="right"
            className="hidden  md:flex rounded-xl overflow-hidden  "
          >
            <img className="object-cover " src="images/building.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
