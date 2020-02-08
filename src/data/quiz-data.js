import React from 'react';
import QuestionType from "./QuestionType";

const QUESTION_DATA = [
    {
        type: QuestionType.SINGLE,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{`class Vector {
 
}`}</code></pre>

                <div>Как создать его экземпляр?</div>
            </div>,
        answers: [
            <div><pre><code className="lang-java">{`new Vector();`}</code></pre><div>lol</div></div>,
            <pre><code className="lang-java">{`Vector();`}</code></pre>,
            <pre><code className="lang-java">{`new Vector;`}</code></pre>,
            <pre><code className="lang-java">{`Vector;`}</code></pre>
        ],
        correct: 0,
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.SINGLE,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{`class Vector {
 
}`}</code></pre>

                <div>Выберите корректный способ сохранения экземпляра этого класса в переменную</div>
            </div>,
        answers: [
            <pre><code className="lang-java">{`Vector vector = new Vector();`}</code></pre>,
            <pre><code className="lang-java">{`void vector = new Vector();`}</code></pre>,
            <pre><code className="lang-java">{`int vector = new Vector();`}</code></pre>,
            <pre><code className="lang-java">{`string vector = new Vector();`}</code></pre>
        ],
        correct: 0,
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.MULTI,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{`class Vector {
  public double x = 0;
  public double y = 0;
  public double Magnitude() {
    return Math.Sqrt(x * x + y * y);
  }
}`}</code></pre>
                <div>И вне его создана переменная <code className="lang-java">Vector v = new Vector();</code></div>

                <div>Выберите варианты кода, которые скомпилируются без ошибок</div>
            </div>,
        answers: [
            <pre><code className="lang-java">{`print(Vector.magnitude());`}</code></pre>,
            <div><pre><code className="lang-java">{`print(x);`}</code></pre><div>lol</div></div>,
            <pre><code className="lang-java">{`print(v.Magnitude());`}</code></pre>,
            <pre><code className="lang-java">{`print(v.x);`}</code></pre>,
            <pre><code className="lang-java">{`print(Vector.y);`}</code></pre>
        ],
        correct: 0,
        shuffle: true
    },
];

export default QUESTION_DATA;
