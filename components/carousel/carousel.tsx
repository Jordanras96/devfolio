import React from "react";
import {
  DotButton,
  useDotButton,
} from "@/components/carousel/EmblaCarouselDotButtons";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";

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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export type CarouselItem = {
  title: string;
  tag: string;
  description: string;
  frontend: string;
  backend: string;
  database: string;
  devops: string;
  image: string;
  confidential: boolean;
};

type PropType = {
  slides: CarouselItem[];
  options?: EmblaOptionsType;
  onPrev?: () => void;
  onNext?: () => void;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options: userOptions, onPrev, onNext } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(userOptions, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{slide.title}</CardTitle>
                  <CardDescription>{slide.tag}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-muted-foreground line-clamp-3">
                    {slide.description}
                  </p>
                </CardContent>
                <CardFooter>
                  {!slide.confidential ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          Détails <ExternalLink className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{slide.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4">
                          {[1, 2, 3, 4].map((imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative h-48 mb-4 overflow-hidden rounded-md"
                            >
                              <Image
                                src={`/images/gallery/${slide.tag.toLocaleLowerCase()}-${imgIndex}.webp`}
                                alt={`Preview ${imgIndex}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <p>{slide.description}</p>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <div>
                              <h4 className="font-semibold">Frontend</h4>
                              <p className="text-sm text-muted-foreground">
                                {slide.frontend}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Backend</h4>
                              <p className="text-sm text-muted-foreground">
                                {slide.backend}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold">DevOps</h4>
                              <p className="text-sm text-muted-foreground">
                                {slide.devops}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Database</h4>
                              <p className="text-sm text-muted-foreground">
                                {slide.database}
                              </p>
                            </div>
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
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={onPrev}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="embla__controls">
        <div className="embla__dots border border-accent rounded-full">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={index === selectedIndex ? "embla__dot--selected" : ""}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
