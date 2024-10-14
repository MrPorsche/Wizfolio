import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className}) => {
    return (
        <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center space-y-8", className)}>
            {children}
        </div>
    );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-8 w-full">
            <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
                <h2 className="text-2xl text-left w-full capitalize">
                    Full Stack Enchanter
                </h2>
                <p className="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a dolorem nostrum eos, fugiat molestias minus sed deserunt
                    numquam quo, rem neque eum sint fugit tenetur odio laudantium vel mollitia!
                </p>
            </ItemLayout>
            <ItemLayout className={"col-span-4 text-accent"}>
                <p className="font-semibold w-full text-left text-5xl">
                    10+ <sub className="font-semibold text-base">Clients</sub>
                </p>
            </ItemLayout>
            <ItemLayout className={"col-span-4 text-accent"}>
                <p className="font-semibold w-full text-left text-5xl">
                    2+ <sub className="font-semibold text-base">years of experience</sub>
                </p>
            </ItemLayout>
            <ItemLayout className={"col-span-4 !p-0"}>
                <img
                     src="https://github-readme-stats.vercel.app/api/top-langs/?username=MrPorsche&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
                     alt="MrPorsche" loading="lazy" className="w-full h-auto"
                />
            </ItemLayout>
            <ItemLayout className={"col-span-8 !p-0"}>
                <img
                     src="https://github-readme-stats.vercel.app/api?username=MrPorsche&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFF&icon_color=FEFE5B&text_bold=false"
                     alt="MrPorsche" loading="lazy" className="w-full h-auto"
                />
            </ItemLayout>
            <ItemLayout className={"col-span-full"}>
                <img
                     src="https://skillicons.dev/icons?i=c,cs,py,js,,react,redux,jquery,nextjs,nodejs,svelte,threejs,vite,,bootstrap,css,sass,tailwind,html,,firebase,mongodb,mysql,sqlite,,git,github,,figma,ps,bash,linux,powershell,windows,,vscode,npm,,discord"
                     alt="MrPorsche" loading="lazy" className="w-full h-auto"
                />
            </ItemLayout>
            <ItemLayout className={"col-span-6 !p-0"}>
                <a href="https://git.io/streak-stats">
                    <img src="https://github-readme-streak-stats.herokuapp.com?user=MrPorsche&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
                         alt="GitHub Streak"
                    />
                </a>
            </ItemLayout>
            <ItemLayout className={"col-span-6 !p-0"}>
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats"
                        alt="GitHub Streak"
                />
            </ItemLayout>
            
        </div>
    </section>
  );
};

export default AboutDetails;