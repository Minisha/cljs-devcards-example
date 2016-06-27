(ns devcards-example.core
  (:require
   #_[om.core :as om :include-macros true]
    [devcards.core :as dc :include-macros true]
    [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :refer [defcard deftest]]))

(enable-console-print!)


(defcard first-card
         (sab/html [:div
                    [:h1 "This is your first devcard!"]]))

;hello world
(defn hello-world []
  (sab/html [:p "Hello World"]))


(defcard hello-world-card
         hello-world)

;function with parameters
(defn display-name [name]
  (sab/html [:div [:h1 "Hello there, ", name]]))

(defcard name-card
         (display-name "minisha")
         )

;multiplication example
(defn multiply [x] (* 2 x))

(defcard multiply-card
         (multiply 5))

;nested function
(defn multiply-nested [number]
  (sab/html [:div [:h1 "Multiplication result ", (multiply number)]]))

(defcard multiply-nested-card
         (multiply-nested 10)
         )

;inline style
(defn inline-style[]
  (sab/html
    [:div
     [:p "I am a inline-style!"]
     [:p
      "I have " [:strong "bold"]
      [:span {:style {:color "red"}} " and red "] "text"]]
    )
 )

(defcard inline-style-card
         inline-style)

;unordered list
(defn for-loop []
    (sab/html [:div "List"
           [:ul (for [n (range 1 10)]
                  [:li {:key n} n])]
             (sab/submit-button "React!")]))


(defcard for-loop-card
         for-loop)


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

