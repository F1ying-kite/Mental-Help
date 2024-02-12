import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const mentalInfo = [
    {
      id: "info",
      href: "/mental/info",
      src: "/mental/info.png",
      text: "心理健康",
    },
    {
      id: "anxiety",
      href: "/mental/anxiety",
      src: "/mental/anxiety.png",
      text: "焦虑症",
    },
    {
      id: "bipolar",
      href: "/mental/bipolar",
      src: "/mental/bipolar.png",
      text: "双相情感障碍",
    },
    {
      id: "depression",
      href: "/mental/depression",
      src: "/mental/depression.png",
      text: "抑郁症",
    },
    {
      id: "obsessive-compulsive-disorder",
      href: "/mental/obsessive-compulsive-disorder",
      src: "/mental/obsessive-compulsive-disorder.png",
      text: "强迫症",
    },
    {
      id: "phobia",
      href: "/mental/phobia",
      src: "/mental/phobia.jpg",
      text: "恐惧症",
    },
    {
      id: "personality-disorders",
      href: "/mental/personality-disorders",
      src: "/mental/personality-disorders.png",
      text: "人格障碍",
    },
    {
      id: "dissociative-identity-disorder",
      href: "/mental/dissociative-identity-disorder",
      src: "/mental/dissociative-identity-disorder.png",
      text: "分离性身份障碍",
    },
    {
      id: "schizophrenia",
      href: "/mental/schizophrenia",
      src: "/mental/schizophrenia.png",
      text: "精神分裂症",
    },
    {
      id: "self-harm",
      href: "/mental/self-harm",
      src: "/mental/self-harm.jpg",
      text: "自残",
    },
    {
      id: "suicide",
      href: "/mental/suicide",
      src: "/mental/suicide.png",
      text: "自杀",
    },
  ];

  return (
    <div className={"flex w-full flex-row flex-wrap"}>
      {mentalInfo.map((mentalItem) => (
        <div id={mentalItem.id} className={"flex flex-col w-1/3 items-center"}>
          <div className={"w-2/3"}>
            <div className={"m-4 mb-0"}>
              <Link href={mentalItem.href} className={"w-full"}>
                <Image
                  src={mentalItem.src}
                  alt={mentalItem.text}
                  width={"2000"}
                  height={"2000"}
                  className={`w-full h-full`}
                />
              </Link>
            </div>
          </div>
          <p className={"text-center"}>{mentalItem.text}</p>
        </div>
      ))}
    </div>
  );
}
