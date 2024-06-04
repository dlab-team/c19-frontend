import {Container} from "react-bootstrap";
import type { Metadata } from "next";
import CodeEditor from "@/components/courses/CodeEditor";
import { html_css_problems } from "@/problems/html-css/html_css_problems";
import { Advance } from "@/components";
import { Render } from "@/components/courses/Render-Exercise";


interface Props {
  params: { id: number };
}

export function generateMetadata({ params }: Props): Metadata {
  const { id } = params;
  return {
    title: `Ejercicio HTML/CSS #${id}/20`,
    description: `Ejercicio HTML/CSS #${id}/20`,
  };
}

const HtmlCssPage = ({ params }: Props) => {
  return (
    <Container className="mt-5 d-flex flex-column gap-5  ">
      <Container className="bg_excercises rounded d-flex justify-content-center align-items-center gap-3">
        <h2 className="py-5 fw-bold fs-1">Ejercicios</h2>
        <h6 className="bg-light text-dark rounded p-2"> {params.id}/20</h6>{" "}
        {/* TODO componente que lleve registro del avance */}
      </Container>
      <Container>
        {" "}
        {/* TODO componente enunciado */}
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          commodo dictum venenatis. Integer aliquet fringilla turpis ut mollis.
          Nulla luctus risus id egestas commodo. Aenean nec aliquet neque. Morbi
          vitae lorem ac orci efficitur dictum non nec lectus. Aliquam posuere
          consectetur nibh, eu efficitur nulla. In sit amet nunc sit amet arcu
          volutpat posuere sit amet sit amet orci. Curabitur rhoncus purus et
          nisl condimentum malesuada. Aenean quis enim nibh. Donec rutrum ac
          odio at congue. Phasellus accumsan sed ligula in commodo. Nunc laoreet
          feugiat dui sed lobortis. Ut sollicitudin dolor eget orci semper
          accumsan. Maecenas viverra enim tortor, sed efficitur diam aliquet ut
        </h4>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-between align-items-center gap-5 flex-column flex-md-row"
      >
        <div className="">
          <h4>Editor</h4>
          <h6>Escribe tu respuesta dentro del Editor</h6>
          <CodeEditor
            codeType="html-css"
            cssCode={html_css_problems[params.id - 1].cssCode}
            htmlCode={html_css_problems[params.id - 1].htmlCode}
          />
        </div>
        <div className="flex-fill">
          <h4>Resultado</h4>
          <h6>Resultado de la Ejecución - Renderizado</h6>
          {/* TODO: sustituir el contenido de los props por las variables que contiene el codigo del editor*/}
          <Render contenidohtml="<h1 class='titulo'>Hola mundo</h1>" contenidocss="<style>.titulo{color:blue}</style>"/>
        </div>
      </Container>
      <Advance actualStep={Number(params.id)} />
    </Container>
  );
};

export default HtmlCssPage;
