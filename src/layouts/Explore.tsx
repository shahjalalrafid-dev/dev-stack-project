
import { use } from "react";
import TechnologyCard from "../components/TechnologyCard"
import type { ITechnologyType } from "../types/types";

interface Iprops {
    technologyPromise: Promise<ITechnologyType[]>;
}

const Explore = ({ technologyPromise }: Iprops) => {

    const technologies = use(technologyPromise);

    return (
        <section className="container mx-auto">
            <h2 className="font-inter text-4xl font-extrabold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text">Technologies</span> </h2>
            <p className="text-[#64748B] text-base font-sans mt-2 mb-10">Pick one technology per category to build your ideal stack.</p>
            <div>
                <div className="w-3/4">
                    <div className="grid grid-cols-3 gap-5">

                        {
                            technologies.map((technology, index) => {
                                return (
                                    <TechnologyCard key={index} technology={technology} ></TechnologyCard>
                                )
                            })
                        }




                    </div>
                </div>
                <div className="w-1/4">

                </div>
            </div>


        </section>
    )
}

export default Explore