import React from "react";
import styled from "styled-components";

function Home() {
      return (
            <div>
                  <Para>IKIGAI</Para>
                  <img
                        src="data:image/jpeg;base64,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"
                        alt="book-png"
                  />
                  <article style={{"textAlign":"justify", "width":"80%", "margin":"auto"}}>
                        Ikigai can describe having a sense of purpose in
                        life, as well as being motivated. According to
                        a study by Michiko Kumano, feeling ikigai as described
                        in Japanese usually means the feeling of accomplishment
                        and fulfillment that follows when people pursue their
                        passions. Activities that generate the feeling of
                        ikigai are not forced on an individual; they are
                        perceived as being spontaneous and undertaken willingly,
                        and thus are personal and depend on a person's inner
                        self. According to psychologist Katsuya Inoue, ikigai
                        is a concept consisting of two aspects: "sources or
                        objects that bring value or meaning to life" and "a
                        feeling that one's life has value or meaning because of
                        the existence of its source or object". Inoue classifies
                        ikigai into three directions social ikigai, non-social
                        ikigai, and anti-social ikigai from a social
                        perspective. Social ikigai refers to ikigai that are
                        accepted by society through volunteer activities and
                        circle activities. An asocial ikigai is an ikigai that
                        is not directly related to society, such as faith or
                        self-discipline. Anti-social ikigai refers to ikigai,
                        which is the basic motivation for living through dark
                        emotions, such as the desire to hate someone or
                        something or to continue having a desire for revenge.
                  </article>
            </div>
      );
}
const Para = styled.p`
      font-size: 26px;
      font-weight: normal;
`;
export default Home;
