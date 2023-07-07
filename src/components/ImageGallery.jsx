"use client";

import Image from "next/image";
import Container from "./layout/Container";


export default function Gallery({
  styles,
  items = [
    {
      image: null,
    }
  ]
}) {



  return (
    <div className={`relative ${styles} bg-themeGrey-100 py-24`}>
      <Container>
        <div className="col-span-12 text-center mb-20">
          <h6 className="text-themeGreen text-xl mb-2">Images</h6>
          <h5 className="text-themePurple text-4xl">Look at some of our stuff</h5>
        </div>
        {items?.map((item, i) => {

          if (!item.image) return null
          return (
            <div key={i} className="
              col-span-12 tablet:mr-6 mb-12 bg-white
              tablet:col-span-6 rounded-xl border-2 border-themeGrey-100">
              <Image
                src={item.image}
                alt=""
                className="object-cover"
              />
            </div>
          )
        })}
      </Container>
    </div>

  );
}
