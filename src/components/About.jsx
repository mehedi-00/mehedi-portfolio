import React from "react";
import Services from "./Services";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  AOS.init();
  const skills = [
    {
      name: "HTML5",
      image: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
    },
    {
      name: "CSS3",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAEKCAMAAABwsaR7AAAA8FBMVEX///8BcLopqd/Pz88AAAAAbblAjccAbLkqrOERg8YOgMTS0c8AabeVlZXFxcXV0tDm5uYRpd6ysrK73/MAZrbZ2dlwcHCjt8kiIiKtwMzh4eEkJCSioqIAc7zX2NkAY7UVFRXu9/yj1/Dx8fG8vLwintigs8j0+v2Y0u7Cys4sLCw0NDQ/Pz+0tLSfn5+u2/HO4fDZ7/ljmMNzoMQXjMwQEBBWVlZHR0daWlpkZGS81uoakc94rNY0hL4Me8E3gcFdnc+Mt9txn8Tg7fbL6fdmvueew+Gb0+9sns6GqsdwwOey0OhSkMF7e3uqxOFLteSSo85YAAAO8UlEQVR4nO2dDXfaOBaGIVSYBG8JE9qEtm7qZBJCu20g/ZpJwSQlTUPCNP//36xkE5Bl3StZkkvY4d1z5szOEc4jWZZe33ttl0o6OvyPUu9ps211sw+H9Gh/qHWoxaWn7SdKPafNKupmnw+1jvZk+1HS763p1/TG9C9Wl357Tb+mz9A/VTd7swr0b/b2XlK9jfUu1n9jfaVX7bN5s89veO096OXLNwXRP/9Trtcp+gp2tAX9U4eMWvSvkGZP9bCe6XXSmf5l9CjW6+XR/4E0S605n6mSSzG+emfX7ZdDnn5v/t+/Un2h+uuvv5meF+SQtenl2kvRwypozbGkf0np6ytNr7ElF0X/fk2/NPo//2/pD58Cepui3/7waqEPC736ulR6UO9S9KCeP076t4+F3sgW7s1/vofR/104vZE1efNY6N8tHMmDJ4nF3Nth/XWser1e4fX6c5p+W64XXwqnh6R5Z7i33BUT0j9r+kdPv72mX9P/++ifLIEeNI8LPdNrxowG7zGFdNX7B7m8K19rrbXWWmuttdZaa60cqq6wLkpbZGXlV0tVUl5VkUHpYnXp/cvSwFs2hLH8X6Vf/rIhjOXfle5WmP68dL7C9L1Sb4Xpx6XxCtN3SuEK01OrsLr0EaUPlg1hKjKk9JurutmSC2YyV5XeG1D6myKtQrDlUFH62NTmlEqXBV62ZLO24Uy1o/QsoTanVKjRcUv/TaA/p/RFGh239J/S9F6P0hdpdNzSb0roewVetU7pNzaFg4eUflzgiumWXlhzyiyo0CkOvlj6II6JFGgV3NIHwrFj+q3ipo5beuHY1SQetRr0taaw5NzE9AXGRJyOvbjVXsb0g+IW/ELpf8X016tBLzUKhVoFp/SiUUjoC7QKTmeOQE96MX1vNa5a0eaUxzH9uDB4t2O/lT52EMb0YXGbrVN6wShEs/SJ6H4eKb1gFEYz+lFhE98lfVM4dPUhdbUK9BmjcDGjh60C8WN5KRFCkn8KSrWY/f+tpo1S+OJWO5jRg+kTMjwWtJtT7R19nYo6uMXor2f0YEyEDBt1O9kVJo650ReNQut81uiuBc2cqFGx0wsr+iuE3n+gh60CWS79Dj/z5UYBswotS3hL+lN+7AWjEIwf6CH4st+uqwmLo//Jj71gFKJw1mgMWgV/d6n0Jzx92hGQqDNr1ImgqeNPlkqfWjEBo4BYBW9iedna0f/g4JsCfXXeCrQK3sdl0nfueaOQJosTJ4lAq0DOljlzOrxJgowCZhWqS6XHjMLlvBmcPons4O3oQ37JEY3C3bwZnD7xlknfx2xOb97sHDQ6ra7d1LGiT9kcWeIkEZyAsN2urOh5o7AhjyjE9BC89YJvRX+AGYUFPWwVbBd8K3rMKIzCebMQtApkusSZkzIKIj3XDrQKZGgF744eNgpYVMFywbehTxsFgf6CazgF6b1Kw1Dx49mu6MWt1htwDeGiTDIaDqfT6ZlE3zP6uNBkMjk+7lrRh5jNueQaYpUW0oiNUn7LH9rSNxH6X1xD5+kTLzpr284crXgIE2wVTES80aTbiJfaZ+bwV/y9iWgU/B7XsueQnpSHx5XGbJswpe/s3KfjgLBRcJk+8YJpm3sXhBl9eCCwb9TE1ANPD1uFXCJe8LHb4HdnE/rxyYbATunFiELI/QC2CnnY/dFiyhjTX/1oZtglRqHD/aRjn4DwWtN2I2OK8tKfilNGwyhYJyCIX/7ezbLnpA8lU2Y2cTCjQK2CTYEUnTITccrkp+/fSqdMoqP0X5xVWDzIoijTI9PdOnQXoE1PV0iYHTcK5pUWxI++d+vwPYAefXaFVNFfp35vZhWIP5xIp3su+vFJTcGOGwUsfQKLTRlguuegv7qFLlWe/hMYD2HKbxW84KyNTBk9+s7ODzU6kxgPGacOk/P5Dc6HWdCHP1XTfT72UOJkRp9r2HkfZkzfv1VO9wU9ZhQovX6tApsyeugYPWAINOlTRoGeRE2rQLzoo9aUwekhQwAKNQqaVoGukLpTBqGHDQE49LhRwKIKc8l9WF561BBAwo0CtQoKeuKL1t2IXrxlMqP3B8JhcavANtWKSUQzRd850F9lBHrUKOAxEbqpamxMKvp+7um+EJw4SYQVZaI+TJOerZDGxTlI4iQRHBMhQ2P2OX3n9CSlnzMdgDo94elFmzMW6McIvTG7TTwn5OmxeEhMD1d3jbrLoE9F0qAKi3ljOCYSWWTezOlTKTc4cZIohJ+ACJZCn6osEo1CR2jcga2CtxR6PuUmGIV5MeNCsFWwKTF6bUzPpdxqRwK9aBQwq+AfL4P+lht7lVHA0ic2OVsLem7a4/EQJtgq2ORszen56L1YzCjaHCwmQs6WQc8nDPF4CBNiFaZLoE+lO1VGAYuJ2JQYGdOnEoaCUfCz9IjRsbAKxvRjjj6TOBG3WtpZCN7KKhjT9xGjsCWhh9MnFlbBDb3KKNDLZAi7TPPN1pj+CrY53lTSHjY6FgVSxvRcXVQmHpI1CphV8MzreY3pT2Cj4GWNAmoVzDfbIuglRgGzChabrTE9ZnOyRgG1CuabrTE9Z3M0jAKWPiFDcd5rPzVjfHeCGQUxHsKEpE9GlUW1U6U7V1tDV4D6sUD4VF2UYBT2s5sV3Zv3QfpyQJWqM4KeGBMfIMOfFrsH6UN+7AWjQGT0YQFv5CCbG5h+gPQpmyM+3Jndaot5UFXxnOEtSN/nWolGYSSjd1BpkZO+idBj8RDpLwp41FNBfwLS8zZHfGZDZhTUCQj39D9B+p2cRgGzCkXRn4L0BzmNQiGvv1LQ74D0KZujYRQKeaeFgv4KpOdsTsYoiImTRCaVFnb08F6L2RyZUXBdUmpHzxsFwebsZyMKTJhVKIS+JucQ6MXESUu2WdHt6rfTywxLgoIYhQCgxzBaiZIn/P25rOjvQXo+FiUahS2AHk6fkGlFFpHq7iq8kYJezkHV5+mFQ8qNAmYVgLurekVRGKOgh+BTJk182dUF8BvkrRDAvWFjZEMPG+QrPh6SPiRgFLCiTDIE6OEQlgY9bDERmwMYBTSqMALoFYUxpvQHuY0CahVG8nhU4wx3dig9YpB5m6NnFFD6SB4Eb0yKocdsjiwewoRYBSCMXD/GV3yc/gCk522OOnGSCImJBPIwcn3XZuxhe4/FQ6BNIkSsAkDfRuEV9LBBRhInHvgjeOyJPAheb+ObLU4PWswQi4eA9DCKB9B38c0WpwctZioeIhxxCNLDL9WGsv029Bt69MKLZ2SJk0RInQiQ7a/jVgGlhw1yKh4ifSumTEj6BEhAKKyCIf0OstVCRsEkAaGwCig9bJBNjAJKD5nMM1P65sYtSI8YBR8yCmj6BDKZ39HtCqBvNmu3O+C8MTMKqFUA3t7VmOAVwBL65sb9yRWCXsKNgjwewoRZBblNq7eHEfHguxqRvlm7P+iDM+ZBeRMniZCYCGB0KvVGd3cyHQW0C5I+pOjj+QIHQTghRmEf+RlidOB8eb3RqNMunI2CsiechgV9PF+Ug56If2+OaBTKyO/gS9DDS+vqddqHbvv4bFgmXBdm9M0mnS965Exjnl6MhyC/g+tEtLL9rAv19vHHauAnXaD0zWYTXV8kwowCFA9hQqzCd92MM+tCfDFs+b4f1U5gHwwpVR+Sng5gPIQpf0wE7APL77Ynk9zopZRREN/pKSnFXAh5pwWwXSlOg1Gu/NTIKKDpE7OXTRrVKWCJk1/I75CoQmACb1ZFbWYU8PSJUXmXEb2ZUUCtAnBvWAQ9Uh8CJE4SIVbBrLzLiJ5f7oWoPGYUsPSJ/oLvlF4wCi30hzC9WYGUCX2I0MPxECYkPAOEkd3Tm8VDmLAPjf0u+pRREGzOBfpLpE6E7DIPVjR9Z+eEv6ER4yGYUcDfaeF71Um7ka8H+d68dHVyL7z9Wz8ewoRXWhDPL09ZD7SfPNSnvzoQyfMaBZ0PjdGbj2B6rNsDPfr+6Y8N6RPPmddnw/EQJr2vhxCvvHV23NXogZq+v3NbA5/V1qyweJB+pQU9BaPvu13FZYDTh3Sio487Z2wOfn+Z640cxCPR8GMb6wFMn5ArnnbOVFjgt5hh3ioX1gN6IUM9kNN3+gc/lOSxhHgIbhSw9AnagxHQgyx9Z7xze6/9hHmOeAiTaWUdXYpkPRDo2XTJ9Wy89HNisGw+NJb0oNutL3rA0XeuToB1EZHwB7B4CJNtSSnrwdmkW0nqxef0/QNkXUSknThJ5OJDY3RLTnrQiOnDUzNyyZc7caPg7kNjxGc9aL/+aUoeK59RcPtNUuK1InNypnxGwfWHxiy/lAN+JQSS2w+N2dJj7/SUye3H123pxa+mqnIXY6eF4LbfWBKfOFGlLzpOi/Bt6XMahVLp0dDX6P9yJE4SuXhLqQP6Wq159EkYeqVRKJUUNYq/gZ795OjbVpBJQiriIUxOv0lqQF/baH7bjGTpUzxxksjp0yf56Gu0MZsuUvSyInGSyOnTJ3no40HPTheeXmUUHH98XZeejjoddIKhlzWMgmOroEFPwWsa5Eyeyig4/iapkp4ujN82y7p/Ul3k0P9t9PF0CXQG/UHqlHvoEB6kp7OldvQNXl3kCpTwbj9fLqdn5Jv5/wzBEyeJyr67uZOlT1aXnIOeHKuliocw9S6rpGVwdCU9s11SB6BxHK9Vrl5qVSaVOuO7m5Hv4hRw9HQzOtqMtJcX/iD0Bv/mTg99ppCegsD6FCT0MwdgOOhR9bKnWVSV0vjuYuRZnQJGP3MAJr/2yWhwnmvQ0+qwU+DDRX8qbRpfo74fVK/Vm6vOKYiI4SkITKYL+xgAHfR85WCYetdV4hfwwgUZuV+e/rKYLnKF5zfllsO9QI7eii7VTtJQ9BTst8yvAhW5d5FvYTTQ+SDad30K6MLYogtjweQzja8vPHeTiPj70c2du2tUQ53zwchBB+ige79t0NMaX98ENj2gM300uDPZRx2p0xtUPRNDQcmDi+vxEtFnHaCnIMp1CgjdOoYudyNLhfQUlPVOAVvSH8OgC2KGQmGr6aCXh4Peoxn0tKitHgZQB+h0iS7cWwC3Yqcga6uZ7zKz6b9d1FYPOU9H/zUo3gI4FT0FZXYVeL6/uZzdyFbU020VuzD+DyQSn8lxdWEuAAAAAElFTkSuQmCC",
    },
    {
      name: "JabaScript",
      image:
        "data:image/png;base64,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",
    },
    {
      name: "React Js",
      image: "https://cdn-icons-png.flaticon.com/512/1183/1183621.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24 md:-mt-60" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        "I'm Mehedi Hasan, and I design website for small busness. While I'm based in Austin, Texas, I help build websites for pepole all over the world"
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">3+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building application, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative w-full md:w-[256px] md:h-[200px]
             bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3
              p-5 shadow-sm skills transition-all duration-500 rounded-lg "
              data-aos="fade-up-left"
             
              data-aos-easing="ease-in-sine" 
              data-aos-duration={200*index}
          >
            <img
              src={skill.image}
              
              className="absolute w-5 md:w-12 h-auto object-cover top-1 md:top-10"
              alt={skill.name}
            />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      {/* <Services /> */}
    </div>
  );
};

export default About;
