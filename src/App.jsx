import React from 'react';

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

import NavBar from './components/navbar/navbar.component';
import shampoo from './assets/shampoo.webp';

import './App.css';

export default function App() {
  const list = [
    {
      title: 'Orange',
      img: shampoo,
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: shampoo,
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: shampoo,
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: shampoo,
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: shampoo,
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: shampoo,
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: shampoo,
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: shampoo,
      price: '$12.20',
    },
  ];

  return (
    <div className="">
      <NavBar />

      {/* <div class="carousel mt-0 p-0">
        <div class="carousel-inner">
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            checked="checked"
          />
          <div class="carousel-item">
            <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
          </div>
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div class="carousel-item">
            <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />
          </div>
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div class="carousel-item">
            <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" />
          </div>
          <label for="carousel-3" class="carousel-control prev control-1">
            ‹
          </label>
          <label for="carousel-2" class="carousel-control next control-1">
            ›
          </label>
          <label for="carousel-1" class="carousel-control prev control-2">
            ‹
          </label>
          <label for="carousel-3" class="carousel-control next control-2">
            ›
          </label>
          <label for="carousel-2" class="carousel-control prev control-3">
            ‹
          </label>
          <label for="carousel-1" class="carousel-control next control-3">
            ›
          </label>
          <ol class="carousel-indicators">
            <li>
              <label for="carousel-1" class="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label for="carousel-2" class="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label for="carousel-3" class="carousel-bullet">
                •
              </label>
            </li>
          </ol>
        </div>
      </div> */}

      <div className="carousel-container">
        <div className="carousel images">
          <div className="carouse-item">Image 1</div>
        </div>
        <div className="carousel-control">
          <div className="top">
            <div className="left">
              <button>‹</button>
            </div>
            <div className="right">
              <button>›</button>
            </div>
          </div>
          <div className="bottom">
            <span> • </span>
            <span> • </span>
            <span> • </span>
          </div>
        </div>
      </div>

      <div className="mt-10 gap-2 grid grid-cols-2 sm:grid-cols-3 max-w-screen-md mx-auto">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            className=""
            onPress={() => console.log('item pressed')}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
