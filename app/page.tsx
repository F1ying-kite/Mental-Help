"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const imageArray = [
    { href: "/mental/info", src: "/mainPage/mental.jpg", text: "心理健康" },
    { href: "/mental/anxiety", src: "/mainPage/anxiety.jpg", text: "焦虑症" },
    {
      href: "/mental/depression",
      src: "/mainPage/depression.jpg",
      text: "抑郁症",
    },
    { href: "/mental/phobia", src: "/mainPage/phobia.jpg", text: "恐惧症" },
  ];

  // 图像数组，存放要切换的图像路径

  // 当前显示图像的索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 更新图像路径
  const updateImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  // 设置定时器，在组件加载时启动
  useEffect(() => {
    const intervalId = setInterval(updateImage, 2000); // 切换间隔，单位为毫秒，这里设置为2000毫秒（2秒）

    // 在组件卸载时清除定时器
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center mb-2">
        <div className="w-1/2">
          <Link href={imageArray[currentIndex].href}>
            <Image
              id="mainImg"
              src={imageArray[currentIndex].src}
              alt=""
              width={"1920"}
              height={"1080"}
              className="w-full h-fit mt-2"
              priority={false}
            ></Image>
          </Link>
          <p className="text-center mt-1 ">{imageArray[currentIndex].text}</p>
        </div>
      </div>

      <div className="w-full flex flex-row border-0 border-t">
        <div className="w-1/4 mx-8 border-x border-b">
          <p className="text-sky-900 ml-4">寻求帮助</p>
          <ul className="list-disc ml-8">
            <li>
              <a
                href={
                  "https://baike.baidu.com/item/%E7%B2%BE%E7%A5%9E%E7%97%85%E5%8C%BB%E7%94%9F/3038637"
                }
                target={"_blank"}
                className="text-indigo-500"
              >
                精神医生
              </a>
            </li>
            <li>
              <a
                href={
                  "https://baike.baidu.com/item/%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F/1311199"
                }
                target={"_blank"}
                className="text-indigo-500"
              >
                心理医生
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4 mx-8 border-x border-b">
          <p className="text-sky-900 ml-4">精神科医院</p>
          <ul className={"list-disc ml-8"}>
            <li>
              <a
                href={"https://www.pkuh6.cn/"}
                target={"_blank"}
                className="text-indigo-500"
              >
                北京大学第六医院
              </a>
            </li>
            <li>
              <a
                href={"https://www.bjad.com.cn/"}
                target={"_blank"}
                className="text-indigo-500"
              >
                北京安定医院
              </a>
            </li>
            <li>
              <a
                href={"https://www.bhlgh.com/"}
                target={"_blank"}
                className="text-indigo-500"
              >
                北京回龙观医院
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4 mx-8 border-x border-b">
          <p className="text-sky-900 ml-4">北京心理危机研究与干预中心</p>
          <ul className="list-disc ml-8 ">
            <li>
              <a
                href="http://www.crisis.org.cn"
                target="_blank"
                className="text-indigo-500"
              >
                http://www.crisis.org.cn
              </a>
            </li>
          </ul>
          <p className="text-sky-900 ml-4">中国国民心理健康服务平台</p>
          <ul className="list-disc ml-8 ">
            <li>
              <a
                href="http://psy.china.com.cn/"
                target="_blank"
                className="text-indigo-500"
              >
                http://psy.china.com.cn
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4 mx-8 border-x border-b">
          <p className="text-sky-900 ml-4">心理援助热线</p>
          <ul className="list-disc ml-8">
            <li className="text-sky-900">座机 800-810-1117</li>
            <li className="text-sky-900">手机 010-82951332</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
