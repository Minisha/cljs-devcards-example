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

;display dynamic data
(defn display-name [name]
  (sab/html [:div [:h1 "Hello there, ", name]]))

(defcard name-card
         (display-name "minisha")
         )


;TODO this doesnt work
(defn multiply [x] (* 2 x))

(defcard add-card
         (sab/html [:div

                    [:p multiply 5]]))

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

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

