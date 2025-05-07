function About(){
    return(
        <div id="About" className="w-full bg-stone-950 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">SOBRE MÍ</h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

                    <div className="bg-neutral-800 bg-opacity-60 rounded-lg overflow-hidden">
                        {/* Profile Image and Name */}
                        <div
                            className="bg-neutral-800 bg-opacity-60 rounded-lg overflow-hidden grid grid-rows-[auto_auto_auto] grid-cols-2">
                            {/* Avatar */}
                            <div className="p-8 flex flex-col items-center justify-center bg-neutral-800 bg-opacity-70">
                                <p className="text-center">Avatar</p>
                            </div>

                            {/* Nombre */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Diego Roque</h3>
                            </div>

                            {/* Bio - ocupa 2 columnas */}
                            <div className="col-span-2 p-8 border-t border-neutral-900">
                                <p className="text-center">
                                    Estudiante apasionado de desarrollo web y software en el Tecnológico de Monterrey.
                                </p>
                            </div>

                            {/* Ubicación */}
                            <div className="p-8 border-t border-r border-neutral-900 flex items-center justify-center">
                                <p>CDMX, México</p>
                            </div>

                            {/* Escuela */}
                            <div className="p-8 border-t border-neutral-900 flex items-center justify-center">
                                <p>Tec de Monterrey</p>
                            </div>
                        </div>

                    </div>


                    <div className="bg-neutral-800 bg-opacity-60 rounded-lg p-8">
                        <h3 className="text-3xl font-bold mb-6">Conóceme</h3>

                        <p className="mb-10">
                            Me desenvuelvo bien en entornos que desafían mis habilidades técnicas y creativas.
                            Como futuro desarrollador full-stack, mi objetivo es contribuir a proyectos innovadores
                            que mejoren la vida cotidiana de las personas mediante aplicaciones inteligentes y fáciles
                            de usar.
                        </p>

                        <p className="text-green-400 font-medium">
                            "Do you have time to waste looking down?"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;