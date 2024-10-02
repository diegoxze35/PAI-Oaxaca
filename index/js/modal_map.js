
const anchorOpenModal = document.querySelectorAll(".open_modal_path");
const modal = document.querySelector(".dialog");
const text = document.getElementById("name").textContent;
import { towns } from './towns/towns.js';
import { getPovertyConditionByIdAndYear, toDomain } from './api/apiCaller.js';
import { clearAllChild } from './utils/utils.js';

anchorOpenModal.forEach((element) => {
    element.addEventListener("click", () => {
        clearAllChild(modal);
        const btn_close = document.createElement("button");
        btn_close.className = "btn_close_modal";
        btn_close.textContent = "Cerrar";
        btn_close.addEventListener("click", () => { modal.close(); });
        modal.appendChild(btn_close);
        towns.get(element.id).forEach((townInfo) => {
            const btn = document.createElement("button");
            btn.textContent = townInfo.name;
            btn.className = "btn_town";
            btn.addEventListener("click", () => {
                getPovertyConditionByIdAndYear(townInfo.code)
                    .then(data => {
                        const article = document.getElementById("article_response");
                        clearAllChild(article);
                        data.forEach((responseObj) => {
                            const div = document.createElement("div");
                            div.className = "poor_summary";
                            const objDomain = toDomain(responseObj)
                            Object.keys(objDomain).forEach((key) => {
                                const p = document.createElement("p");
                                p.textContent = key + ": " + objDomain[key];
                                div.appendChild(p);
                            });
                            article.appendChild(div);
                        });
                    })
                modal.close();
            });
            modal.appendChild(btn);
        })
        modal.showModal();
    });

    element.addEventListener("mouseover", () => {
        const name = document.getElementById("name");
        name.innerText = element.id;
        element.addEventListener("mouseleave", () => {
            name.innerText = text;
        });
    });
});