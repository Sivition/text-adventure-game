const game = {
    currentScreen: "start",
    imagesDir: "images/",
    screens: {
        start: {
            text: "Вы наконец-то собрали яйца в кулак и решили пойти в лес за дровами.",
            image: "start.png",
            choices: [
                { text: "Ну, я пошёл", screen: "forest" },
                { text: "Сходить в деревню", screen: "village" }
            ]
        },
        forest: {
            text: "Вы вошли в лес. Здесь темно и страшно вы чувствуете как живот предательски урчит хорошо, что ещё не стемнело",
            image: "forest.png",
            choices: [
                { text: "дрова сами себя не соберут", screen: "deep_forest" },
                { text: "думаю стоит вернутся", screen: "end" }
            ]
        },
        village: {
            text: "Вы пришли в деревню. Дома старые и унылые. Недалеко старый дед ссыт на забор.",
            image: "village.png",
            choices: [
                { text: "Поговорить с дедом", screen: "talk" },
                { text: "Вернуться к лесу", screen: "start" }
            ]
        },
        deep_forest: {
            text: "Вы углубились в лес и нашли хорошее место где упало старое сухое дерево. Можно насобирать много хвороста.",
            image: "deep_forest.png",
            choices: [
                { text: "Начать собирать хворост", screen: "mysterious_place" },
                { text: "Вернуться назад", screen: "end" }
            ]
        },
        talk: {
            text: "Вы попросили деда занять дров на пару дней, дед ответил -ты кто такой я тебя не звал иди нах..! - он не договорил и упал. Затем встал и продолжил ссать на забор.",
            image: "talk.png",
            choices: [
                { text: "Продолжить исследование", screen: "explore" },
                { text: "Вернуться назад", screen: "village" }
            ]
        },
        mysterious_place: {
            text: "Оказалось, что дерево упало не просто так, оно задавило чёрного лесоруба. Вы видите что в руках он сжал огромную кучу денег. Этого хватит чтобы провести газ!",
            image: "mysterious_place.png",
            choices: [
                { text: "Забрать сокровище", screen: "end_win" },
                { text: "Вернуться назад", screen: "end" }
            ]
        },
        explore: {
            text: "Вы наступили в говно, судя по вони точно не коровье. Настроение испорчено. Может стоит вернутся домой?.",
            image: "explore.png",
            choices: [
                { text: "Засунуть руку в штаны и поискать", screen: "start" },
                { text: "Пойти мёрзнуть в свою халупу", screen: "end" }
            ]
        },
        end_win: {
            text: "Поздравляем! Вы выиграли!",
            image: "end_win.png",
            choices: [
                { text: "Начать новую игру", screen: "start" },
                { text: "Выход", screen: "exit" }
            ]
        },
        end: {
            text: "Вы вернулись в холодную хибару. И начинаете кашлять. Впереди несколько холодных дней. Вряд ли вы переживёте воспаление лёгких",
            image: "end.png",
            choices: [
                { text: "Начать новую игру", screen: "start" },
                { text: "Выход", screen: "exit" }
            ]
        },
        exit: {
            text: "Выход",
            image: "",
            choices: []
        }
    },
    showScreen: function() {
        const screen = this.screens[this.currentScreen];
        document.getElementById('image').innerHTML = `<img src="${this.imagesDir + screen.image}" alt="${screen.text}">`;
        document.getElementById('text').innerText = screen.text;
        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = "";
        screen.choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.onclick = () => {
                this.currentScreen = choice.screen;
                this.showScreen();
            };
            choicesDiv.appendChild(button);
        });
    }
};

window.onload = () => {
    game.showScreen();
};
