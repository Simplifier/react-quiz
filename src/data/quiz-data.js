import React from 'react';
import QuestionType from "./QuestionType";

const QUESTION_DATA = [
    {
        type: QuestionType.SINGLE,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
 
}`
                }</code></pre>

                <div>Как создать его экземпляр?</div>
            </div>,

        codeAnswers: {
            lang: 'java',
            options: [
                'new Vector();',
                'Vector();',
                'new Vector;',
                'Vector;'
            ]
        },
        correct: 0,
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.SINGLE,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
 
}`
                }</code></pre>

                <div>Выберите корректный способ сохранения экземпляра этого класса в переменную</div>
            </div>,

        codeAnswers: {
            lang: 'java',
            options: [
                'void vector = new Vector();',
                'Vector vector = new Vector();',
                'int vector = new Vector();',
                'string vector = new Vector();'
            ]
        },
        correct: 1,
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.MULTI,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
  public double x = 0;
  public double y = 0;
  public double magnitude() {
    return Math.Sqrt(x * x + y * y);
  }
}`
                }</code></pre>
                <div>И вне его создана переменная <code className="lang-java">Vector v = new Vector();</code></div>

                <div>Выберите варианты кода, которые скомпилируются без ошибок и предупреждений</div>
            </div>,

        codeAnswers: {
            lang: 'java',
            options: [
                'print(Vector.magnitude());',
                'print(x);',
                'print(v.magnitude());',
                'print(v.x);',
                'print(Vector.y);'
            ]
        },
        correct: [2, 3],
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.MULTI,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
    public double x = 0;
    public double y = 0;
    public static Vector zero = new Vector();

    public static double distance(Vector a, Vector b) {
        return 1;
    }
}`
                }</code></pre>
                <div>И вне его создана переменная <code className="lang-java">Vector v = new Vector();</code></div>

                <div>Выберите варианты кода, которые скомпилируются без ошибок и предупреждений</div>
            </div>,

        codeAnswers: {
            lang: 'java',
            options: [
                'print(zero);',
                'print(Vector.zero);',
                'print(v.zero);',
                'print(Vector.distance(new Vector(), new Vector()));',
                'print(distance(new Vector(), new Vector()));',
                'print(v.y);',
                'print(v.distance(new Vector(), new Vector()));'
            ]
        },
        correct: [1, 3, 5],
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.MULTI,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
    private double x = 0;
    public double y = 0;
    private double magnitude() {
        return Math.sqrt(x * x + y * y);
    }
}`
                }</code></pre>
                <div>И вне его создана переменная <code className="lang-java">Vector v = new Vector();</code></div>

                <div>Выберите варианты кода, которые скомпилируются без ошибок и предупреждений</div>
            </div>,

        codeAnswers: {
            lang: 'java',
            options: [
                'print(v.magnitude());',
                'print(v.y);',
                'print(v.x);',
            ]
        },
        correct: [1],
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.SINGLE,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
    public double x = 0;
    public double y = 0;
}`
                }</code></pre>
                <div>И вне его создана переменная <code className="lang-java">Vector v = new Vector();</code></div>

                <div>Выберите корректный способ изменения значения поля x</div>
            </div>,

        codeAnswers: {
            lang: 'java',
            options: [
                'v.x = 5;',
                'x = 5;',
                'double x = 5;',
                'Vector.x = 5;',
            ]
        },
        correct: 0,
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.SINGLE,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
    public double x = 0;
    public double y = 0;
}`
                }</code></pre>
                <div>И вне его выполняется код</div>
                <pre><code className="lang-java">{
`Vector vectorA = new Vector();
vectorA.x = 5;
Vector vectorB = new Vector();
vectorB.x = 10;`
                }</code></pre>

                <div>Что выведет в консоль следующий код?</div>
                <pre><code className="lang-java">{
                    `print(vectorA.x);`
                }</code></pre>
            </div>,

        answers: [
            <span>5</span>,
            <span>10</span>,
            <span>15</span>,
            <span>Выдаст ошибку</span>,
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

                <pre><code className="lang-java">{
`class Vector {
    public double x = 0;
    public double y = 0;
}`
                }</code></pre>
                <div>И вне его выполняется код</div>
                <pre><code className="lang-java">{
`Vector vectorA = new Vector();
vectorA.x = 5;
Vector vectorB = new Vector();
vectorB.x = 10;
vectorB.x = vectorA.x;`
                }</code></pre>

                <div>Что выведет в консоль следующий код?</div>
                <pre><code className="lang-java">{
                    `print(vectorB.x);`
                }</code></pre>
            </div>,

        answers: [
            <span>5</span>,
            <span>10</span>,
            <span>0</span>,
            <span>Выдаст ошибку</span>,
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

                <pre><code className="lang-java">{
`class Vector {
    public double x = 0;
    public double y = 0;
}`
                }</code></pre>
                <div>И вне его выполняется код</div>
                <pre><code className="lang-java">{
`Vector vectorA = new Vector();
vectorA.x = 5;
Vector vectorB = new Vector();
vectorB.x = vectorA.x;
vectorB.x = 10;`
                }</code></pre>

                <div>Что выведет в консоль следующий код?</div>
                <pre><code className="lang-java">{
                    `print(vectorB.x);`
                }</code></pre>
            </div>,

        answers: [
            <span>5</span>,
            <span>10</span>,
            <span>0</span>,
            <span>Выдаст ошибку</span>,
        ],
        correct: 1,
        shuffle: true
    },
    ///////////////////////////////////////////////////
    {
        type: QuestionType.SINGLE,
        question:
            <div>
                <div>Определен класс</div>

                <pre><code className="lang-java">{
`class Vector {
    public double x = 0;
    public double y = 0;
}`
                }</code></pre>
                <div>И вне его выполняется код. Что он выведет в консоль?</div>
                <pre><code className="lang-java">{
`Vector vector;
vector.x = 5;
print(vector.x);`
                }</code></pre>
            </div>,

        answers: [
            <span>5</span>,
            <span>10</span>,
            <span>0</span>,
            <span>Выдаст ошибку</span>,
        ],
        correct: 3,
        shuffle: true
    },
];

export default QUESTION_DATA;
