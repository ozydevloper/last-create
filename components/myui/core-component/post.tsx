import Image from "next/image";
import { CardParent } from "../card";
import { Badge } from "../badge";
import { useState } from "react";
import { useModeZustand } from "@/lib/zustand";
import { Portal } from "../portal";

export const Post = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const setdDatadetail = useModeZustand((state) => state.setDataDetail);

  return (
    <CardParent className="bg-primary-foreground gap-y-1 select-none  transition-all ease-in-out duration-300">
      {preview && (
        <Portal>
          <div
            onClick={() => setPreview(false)}
            className="inset-0 fixed h-dvh bg-black/50 flex items-center justify-center z-50"
          >
            <Image
              src={"/my.jpeg"}
              alt="..."
              fill
              className={`object-contain `}
            />
          </div>
        </Portal>
      )}
      <div className="w-full flex items-center justify-between text-center text-xs font-semibold text-primary">
        <p>Senin, 07 September 2025</p>
        <p>20:00 - 21:00 WIB</p>
      </div>

      <div className="w-full flex flex-col md:flex-row z-0">
        <CardParent className="overflow-hidden relative h-52 min-h-52 bg-primary-foreground md:w-48">
          <Image
            onClick={() => setPreview(true)}
            src={"/my.jpeg"}
            alt="..."
            fill
            className={`object-contain `}
          />
        </CardParent>
        <CardParent
          onClick={() => setdDatadetail({})}
          className="gap-y-1 justify-between active:scale-95  transition-all ease-in-out duration-300 hover:bg-background/45"
        >
          <div className="flex flex-row gap-x-2 items-center justify-between">
            <span className="text-sm font-bold whitespace-pre-wrap ">
              Wisatawan telah disediakakn i n oleh
            </span>
            <div className="flex text-xs gap-x-1 items-center justify-start">
              <Badge color="green">Gratis</Badge>
              <Badge color="default">Umum</Badge>
            </div>
          </div>
          <p
            className={`w-full relative whitespace-pre-line text-xs text-muted-foreground h-24 overflow-hidden `}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc,
            <span className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent rounded-md from-20% flex items-end justify-center font-bold pb-2 underline text-center gap-x-1 ">
              Lihat detai
            </span>
          </p>
          <CardParent className="flex-row items-center justify-start gap-x-1 max-w-fit md:w-fit">
            <Badge color="blue">Online</Badge>
            <Badge color="blue">Kateogri</Badge>
            <Badge color="blue">Topi</Badge>
          </CardParent>
        </CardParent>
      </div>
    </CardParent>
  );
};
