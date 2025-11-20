import { ArrowUp } from "lucide-react";
import { Badge } from "../badge";
import { CardParent, CardSubTitle } from "../card";
import { useModeZustand } from "@/lib/zustand";

export const Detail = ({}) => {
  const dataDetail = useModeZustand((state) => state.dataDetail);
  const setDataDetail = useModeZustand((state) => state.setDataDetail);
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 h-dvh flex justify-center p-2 overflow-y-scroll ${dataDetail !== null ? "translate-y-0" : "-translate-y-full"} transition-all ease-in-out duration-200`}
    >
      {dataDetail !== null && (
        <CardParent className="h-fit flex flex-col gap-y-2 bg-primary-foreground">
          <Badge
            onClick={() => setDataDetail(null)}
            color="red"
            className="flex items-center justify-center sticky top-2 active:bg-red-200"
          >
            <ArrowUp size={15} />
          </Badge>

          <CardParent className="font-bold text-base text-center">
            Memeihewf ihodqwih qwiugdiu wqiudgiuwg
          </CardParent>
          <CardParent className="gap-y-1">
            <CardSubTitle className="text-xs font-bold text-muted-foreground">
              Deskripsi:
            </CardSubTitle>
            <p className="whitespace-pre-line text-xs font-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc,
            </p>
            <CardParent className="mt-5 gap-y-2">
              <CardSubTitle className="font-bold text-xs ">
                Agenda detail
              </CardSubTitle>
              <div className="flex flex-col gap-y-0.5">
                <div className="w-full flex items-start text-start justify-start gap-x-1">
                  <CardSubTitle className="font-bold text-xs">
                    Tanggal:
                  </CardSubTitle>
                  <p className="text-xs font-normal">
                    Jumat, 08 September 2007
                  </p>
                </div>
                <div className="w-full flex items-start text-start justify-start gap-x-1">
                  <CardSubTitle className="font-bold text-xs">
                    Waktu:
                  </CardSubTitle>
                  <p className="text-xs font-normal">11:00 -12:00 WIB</p>
                </div>
                <div className="w-full flex items-start text-start justify-start gap-x-1">
                  <CardSubTitle className="font-bold text-xs">
                    Biaya:
                  </CardSubTitle>
                  <p className="text-xs font-normal">Gratis</p>
                </div>
                <div className="w-full flex items-start text-start justify-start gap-x-1">
                  <CardSubTitle className="font-bold text-xs">
                    Kalangan:
                  </CardSubTitle>
                  <p className="text-xs font-normal">Umum</p>
                </div>
                <div className="w-full flex items-start text-start justify-start gap-x-1">
                  <CardSubTitle className="font-bold text-xs">
                    Pembicara:
                  </CardSubTitle>
                  <p className="text-xs font-normal">
                    Pembicara 1, Pembicara 2, Pembicara 3, Pembicara 4
                  </p>
                </div>
                <div className="w-full flex items-start text-start justify-start gap-x-1">
                  <CardSubTitle className="font-bold  text-xs">
                    Penyelenggara:
                  </CardSubTitle>
                  <p className="text-xs font-normal">
                    Penyelenggara 1, Penyelenggara 2
                  </p>
                </div>
              </div>
            </CardParent>
            <CardParent>
              <CardSubTitle className="w-full text-start text-xs font-bold">
                Pelaksanaan
              </CardSubTitle>
              <div className="w-full flex text-start items-start justify-start gap-x-1">
                <CardSubTitle className="font-bold text-xs">Kota:</CardSubTitle>
                <p className="text-xs font-normal">Jakarta Utara</p>
              </div>
              <div className="w-full flex text-start items-start justify-start gap-x-1">
                <CardSubTitle className="font-bold text-xs">
                  Lokasi:
                </CardSubTitle>
                <p className="text-xs font-normal">Podium Jakarta</p>
              </div>
              <div className="w-full flex text-start items-start justify-start gap-x-1">
                <CardSubTitle className="font-bold text-xs">
                  Alamat:
                </CardSubTitle>
                <a
                  href={"https://google.com"}
                  className="text-xs font-normal text-priamry underline-offset-1 underline active:text-primary transition-colors ease-in-out duration-200"
                >
                  Jln Mayjen Sutoyo
                </a>
              </div>
            </CardParent>
          </CardParent>
        </CardParent>
      )}
    </div>
  );
};
