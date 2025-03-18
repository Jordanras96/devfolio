import React, { useCallback } from "react";
import {
  DotButton,
  useDotButton,
} from "@/components/carousel/EmblaCarouselDotButtons";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ExternalLink, Lock } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface CarouselItem {
  title: string;
  image: string;
  tag: string;
  description: string;
  frontend: string;
  backend: string;
  server: string;
  database: string;
  confidential: boolean;
}

type PropType = {
  slides: CarouselItem[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = ({ slides, options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    // <div className="py-20 relative overflow-hidden bg-accent/20 w-full">
    <section className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container px-4 md:px-0">
          {slides.map((items, index) => (
            <div key={index} className="embla__slide">
              <Card className="bg-tran dark:bg-gray-800 shadow-neomorph hover:shadow-neomorph-hover transition-all duration-300 h-full flex flex-col justify-between transform hover:scale-95 z-10 hover:z-20 mx-2">
                <CardHeader className="flex-shrink-0 w-full">
                  <div className="w-full h-[150px] relative mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={items.image}
                      alt={items.title}
                      fill
                      className="object-cover"
                    />
                    {items.confidential && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Lock className="w-12 h-12 text-white/80 animate-pulse" />
                      </div>
                    )}
                  </div>
                  <CardTitle>
                    <h3 className="text-xl font-bold mb-2">{items.title}</h3>
                  </CardTitle>
                  <CardDescription className="mb-4 text-muted-foreground line-clamp-2">
                    {items.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-60 overflow-auto flex flex-col gap-1 w-full">
                  <div className="text-sm">
                    <span className="font-semibold">Frontend:</span>
                    <p className="font-normal text-muted-foreground">
                      {items.frontend}
                    </p>
                  </div>
                  <div className="text-sm ">
                    <span className="font-semibold">Backend:</span>
                    <p className="font-normal text-muted-foreground">
                      {items.backend}
                    </p>
                  </div>
                  <div className="text-sm ">
                    <span className="font-semibold">Server:</span>
                    <p className="font-normal text-muted-foreground">
                      {items.server}
                    </p>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Database:</span>
                    <p className="font-normal text-muted-foreground">
                      {items.database}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto w-full flex justify-center">
                  {!items.confidential ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 px-4 rounded-lg bg-accent text-accent-foreground"
                        >
                          Voir plus
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-3xl bg-background">
                        <DialogHeader>
                          <DialogTitle>{items.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4">
                          {/* Galerie d'images */}
                          {[1, 2, 3, 4].map((imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative h-40 rounded-lg overflow-hidden"
                            >
                              <Image
                                src={`/images/gallery/${items.tag.toLowerCase()}-${imgIndex}.webp`}
                                alt={`Preview ${imgIndex}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mb-4 text-muted-foreground">
                          {items.description}
                        </div>
                        {/* Grille des technologies */}
                        <div className="grid grid-cols-4 gap-4 mt-4">
                          <div className="text-center p-2 bg-accent rounded-lg">
                            <p className="text-sm font-semibold">Frontend</p>
                            <p className="text-xs text-muted-foreground">
                              {items.frontend}
                            </p>
                          </div>
                          <div className="text-center p-2 bg-accent rounded-lg">
                            <p className="text-sm font-semibold">Backend</p>
                            <p className="text-xs text-muted-foreground">
                              {items.backend}
                            </p>
                          </div>
                          <div className="text-center p-2 bg-accent rounded-lg">
                            <p className="text-sm font-semibold">Serveur</p>
                            <p className="text-xs text-muted-foreground">
                              {items.server}
                            </p>
                          </div>
                          <div className="text-center p-2 bg-accent rounded-lg">
                            <p className="text-sm font-semibold">
                              Base de données
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {items.database}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      disabled
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Confidentiel <Lock className="w-4 h-4" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots border border-accent rounded-full">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot bg-red-500 text-blue-600 border-green-500 ring-yellow-400".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
    // </div>
  );
};

export default EmblaCarousel;
