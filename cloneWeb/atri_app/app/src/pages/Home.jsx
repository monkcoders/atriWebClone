import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex10Cb, usenavbarCb, useFlex4Cb, useFlex5Cb, useFlex8Cb, useFlex16Cb, usemesec1Cb, useFlex12Cb, useFlex14Cb, useFlex15Cb, useFlex13Cb, useFlex23Cb, useFlex17Cb, useFlex18Cb, useFlex19Cb, useFlex29Cb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex28Cb, useFlex30Cb, useFlex32Cb, useFlex50Cb, useFlex31Cb, useFlex51Cb, useFlex49Cb, useFlex24Cb, useFlex57Cb, useFlex34Cb, useFlex35Cb, useFlex43Cb, useFlex36Cb, useFlex37Cb, useFlex44Cb, useFlex38Cb, useFlex53Cb, useFlex40Cb, useFlex54Cb, useFlex41Cb, useFlex55Cb, useFlex42Cb, useFlex56Cb, usebrandlogoCb, useblogCb, useaboutCb, useservicesCb, useprojectCb, usebookacallCb, useImage10Cb, useTextBox20Cb, useTextBox21Cb, useTextBox22Cb, useButton3Cb, useButton4Cb, useImage12Cb, useImage11Cb, usetrustedCb, useImage13Cb, useImage15Cb, useImage16Cb, useImage14Cb, useImage17Cb, useTextBox26Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, uselist1Cb, useImage18Cb, useTextBox27Cb, useTextBox33Cb, useTextBox34Cb, uselist2Cb, useTextBox36Cb, useImage19Cb, useTextBox28Cb, useTextBox37Cb, uselist3Cb, useTextBox39Cb, useTextBox40Cb, useTextBox42Cb, useTextBox63Cb, useButton6Cb, useTextBox41Cb, useTextBox24Cb, useTextBox25Cb, useTextBox44Cb, useTextBox45Cb, useTextBox43Cb, useImage20Cb, useTextBox46Cb, useTextBox47Cb, useImage27Cb, useTextBox58Cb, useTextBox48Cb, useTextBox49Cb, useTextBox65Cb, useImage33Cb, useTextBox52Cb, useTextBox53Cb, useTextBox66Cb, useImage34Cb, useTextBox54Cb, useTextBox55Cb, useTextBox67Cb, useImage35Cb, useTextBox56Cb, useTextBox57Cb, useTextBox68Cb, useImage36Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const navbarProps = useStore((state)=>state["Home"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Home"]["navbar"]);
const navbarCb = usenavbarCb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const mesec1Props = useStore((state)=>state["Home"]["mesec1"]);
const mesec1IoProps = useIoStore((state)=>state["Home"]["mesec1"]);
const mesec1Cb = usemesec1Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const brandlogoProps = useStore((state)=>state["Home"]["brandlogo"]);
const brandlogoIoProps = useIoStore((state)=>state["Home"]["brandlogo"]);
const brandlogoCb = usebrandlogoCb()
const blogProps = useStore((state)=>state["Home"]["blog"]);
const blogIoProps = useIoStore((state)=>state["Home"]["blog"]);
const blogCb = useblogCb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const servicesProps = useStore((state)=>state["Home"]["services"]);
const servicesIoProps = useIoStore((state)=>state["Home"]["services"]);
const servicesCb = useservicesCb()
const projectProps = useStore((state)=>state["Home"]["project"]);
const projectIoProps = useIoStore((state)=>state["Home"]["project"]);
const projectCb = useprojectCb()
const bookacallProps = useStore((state)=>state["Home"]["bookacall"]);
const bookacallIoProps = useIoStore((state)=>state["Home"]["bookacall"]);
const bookacallCb = usebookacallCb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const trustedProps = useStore((state)=>state["Home"]["trusted"]);
const trustedIoProps = useIoStore((state)=>state["Home"]["trusted"]);
const trustedCb = usetrustedCb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const list1Props = useStore((state)=>state["Home"]["list1"]);
const list1IoProps = useIoStore((state)=>state["Home"]["list1"]);
const list1Cb = uselist1Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const list2Props = useStore((state)=>state["Home"]["list2"]);
const list2IoProps = useIoStore((state)=>state["Home"]["list2"]);
const list2Cb = uselist2Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const list3Props = useStore((state)=>state["Home"]["list3"]);
const list3IoProps = useIoStore((state)=>state["Home"]["list3"]);
const list3Cb = uselist3Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()

  return (<>
  <Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Flex className="p-Home navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Image className="p-Home brandlogo bpt" {...brandlogoProps} {...brandlogoCb} {...brandlogoIoProps}/>
</Flex>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}/>
<TextBox className="p-Home services bpt" {...servicesProps} {...servicesCb} {...servicesIoProps}/>
<TextBox className="p-Home project bpt" {...projectProps} {...projectCb} {...projectIoProps}/>
<TextBox className="p-Home blog bpt" {...blogProps} {...blogCb} {...blogIoProps}/>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox className="p-Home bookacall bpt" {...bookacallProps} {...bookacallCb} {...bookacallIoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex className="p-Home mesec1 bpt" {...mesec1Props} {...mesec1Cb} {...mesec1IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox className="p-Home trusted bpt" {...trustedProps} {...trustedCb} {...trustedIoProps}/>
</Flex>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home list1 bpt" {...list1Props} {...list1Cb} {...list1IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home list2 bpt" {...list2Props} {...list2Cb} {...list2IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox className="p-Home list3 bpt" {...list3Props} {...list3Cb} {...list3IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
