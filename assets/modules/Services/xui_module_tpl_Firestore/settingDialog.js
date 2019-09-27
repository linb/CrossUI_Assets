xui.Class('xui.Once.Setting', 'xui.Module',{
    Instance:{
        setCallback : function(callback){
            this.callback = callback;
        },
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"databinder_1")
                .setName("databinder_1")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog1")
                .setLeft("7.5em")
                .setTop("3.3333333333333335em")
                .setWidth("51.666666666666664em")
                .setHeight("40.833333333333336em")
                .setResizer(false)
                .setCaption("Firebase config setting")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setRestoreBtn(false)
                .setCloseBtn(false)
                .setModal(true)
            );
            
            host.xui_ui_dialog1.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon1")
                .setLeft("27.166666666666668em")
                .setTop("0.3333333333333333em")
                .setImageClass("xui-icon-question")
                .setIconColor("#0000FF")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"url",
                        "args":[
                            "//firebase.google.com/docs/web/setup#config-object"
                        ],
                        "method":"open----_blank"
                    }
                ])
            );
            
            host.xui_ui_dialog1.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_form")
                .setDock("fill")
                .setDockMargin({
                    "left":0,
                    "top":32,
                    "right":0,
                    "bottom":46
                })
                .setLeft("2.5em")
                .setTop("3.3333333333333335em")
                .setBorderType("inset")
                .setCustomStyle({
                    "PANEL":{
                        "background-color":"#F0F0F0",
                        "background-image":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAAFtCAYAAAATT0E9AAAgAElEQVR4Xu2dCbyM1f/Hv3MX+5WlRX+JUiFEouyyZidbSWQXLRQpKS4/LfxsKbvIXkKEZCk/W0mWyl4RSaJkufa7zP/1OePMfWbuzJ2Ze2fuPDPzeV4vL8w8z1ne5zyf8z3fc+Z8LWfPnrUKLxIgARIggbAhYKGwh01bsiIkQAIkoAhQ2NkRSIAESCDMCFDYw6xBWR0SIAESoLCzD5AACZBAmBGgsIdZg7I6JEACJEBhZx8gARIggTAjQGEPswZldUiABEiAws4+QAIkQAJhRoDCHmYNyuqQAAmQQFgJ+/Y/UuTpxUkyr02MPHxHFFuXBEiABCKSQFgJe2ZbcMeJFOm8NEk+ahUjFQtzYMgsTz5PAiQQHAIUdgN3CntwOiFzJQES8C8Bvwv7v1es8sd5kQcKWVRJE1NExm1Nlknbk+X8Vavcld8iYxrFSO27Ui1iuFBeWJUkh89YpUAui7xcLVq6PRQtsTduOZlglfofJcrzlaPlm99T5ItDKZInu0U+7xCr8un2WaIs3Z+i8rsph0UWP+locX9+MEXGfZMk5QtFycd7ktV9SH9onRiVh07/xAXH89AK57XIus6xcnucRX76yyp33CRSIKetXrxIgARIwKwE/CbsB/62yugtSbL8QIoSzBcqR6s6Q0hH/C9ZZj4eI/cUtMiMHSky54dk+fTJWCl1i0XwXNuPE6VT+WjpXjFKthyzyoAvk2R0wxhpXtKm7Fp4ryeL+rxWsSi5nmyVfDktdvHHfe4sbgh716WJ8uzD0dK3SrR8e9yWBwaQZyvZypne8/ju/W3JMuzrJKlRLEqG1YmRsoUsQok3a7dmuUggsglkSthhjX9/IkUGr0uS386KPF4qSnpWipaSt6SK3qjNyfLt8RRZ2C5WcsSIXE0S+d9vKVKukEVZws7foznwGcR8XOMYB2HvVSnaPmC4arb0hP31dUl26xvPvrE+SfadttrL5UnY8f1vZ63y6d4UmbEzWfJkExlYI1pal06dWUR2V2LtSYAEzEIgU8KuLeGBNWLkxSrRSridL4jhk4sSJTFZlKXd/oEoefD/ouyWNtwouD58PNYtE22xv10/1YrPrLCj7G9tTJKVT8fKLblttre3PnYMaKt/TlFWf42ilnTLbpaGZjlIgAQih0CmhD3husjivcnyziabBQv3S5sy0RKXzREghPDHkymy7ECKLNqbIqVvtchHrWLlphyi/OOhIuyYbaz91eavxwyla4Uo5fen3z1yXhjWlARCgUCmhF1XEMK95ViKDN+QJAf/tiofO3zXEMIJ3yarBc6G96b6y5vMTZT4Ojbr25UrBtb0mctW6VLB5v8OhMXuyhUDf3+HTxNlWou02x1n7UoWuHPgPkLZG92XOusIhYZmGUmABCKHgF+EXePCnhII+9mrVqlaxCbkEHtY6lOax0iJm6Nk49EUJZDTWsaoe/TiabsyUdL74WjZ+adVfa+F31/CjsVTuIyMC7SDakbbBw/k8/clqzSdlyhN7ouSvlVi5HKiVe2+wQzkm+Mpkj+HxWH9IHK6CWtKAiQQSgT8KuyuKg6rfdTmJJm5K0Vtd8QWwjcejZYnykbbd5U4b3ccXtfxe08Wu3G7o7EMg2rGqAVOzADgD69cxCLrfrVti8QgMqiWbbuj8frylxR5cVWSEnmUdUFb25ZKXiRAAiQQKgQCLuxmAAFhd94VY4ZysQwkQAIkEAgCFPZAUGWaJEACJBBEAhT2IMJn1iRAAiQQCAIRIeyBAMc0SYAESMCsBCjsZm0ZlosESIAEMkiAwp5BcHyMBEiABMxKgMJu1pZhuUiABEgggwQo7BkEx8dIgARIwKwEKOxmbRmWiwRIgAQySIDCnkFwfIwESIAEzEqAwm7WlmG5SIAESCCDBCjsGQTHx0iABEjArAQo7GZtGZaLBEiABDJIwHzCfu6yWF5ZKNbXm4vcdYvrai3dIfLb3yL9G3mu9sVrYukzS6wV7hLp91jq/Rv2i+WNxWKd19t9Pp5TN98d87aKZeNBsU7oKJLTKeKJ+UorsvVnsXy0OTDl/fkvsbQaL3LirGPNK94l1o+fFymYJ/Xzg3+KpdsMsX7YXaTk//mXVKi1iX9r7zI1a0qKWD7dLpYJa0V+PSXyWFmxTugkki+X4zv69ue2d/S2m7KgVAHK4sp1sfSaKdba94t0qRmgTByTNZ+w40X/eJtYxzwlks1FrD1AGvixWDtVF6l0t3eQ1uwRy+hVYp3zrMjt+USuJ4ml/wKxFrvFu8HBu1zMcVeoiQjae8n3Yn33CdftnRmqEPbXF4l1aldHEc9Mmhl5NtTaJCN19PUZGFZ4j8c/bRtIk5LFekucWKKcztH2Nd2svh/9N35pWkMhq8vhlJ+phB2jeBSs6EfuEWlRwTWavX+IZdTKtKN7eiAxC+g8Vaydaoi0qijywzGxPDfb9sKXuSPITeDn7ENNRPBirN8r1qGt/AxCRCjs/mfqrxTHrBbLxSuBaXd/ldGbdCjsXlA6eU4sr34s1pFP2ixrV9esTSJXE0V61/UiQcMtszaJZflOsc7oLpaxq0USrjrMCuxTw/8sE/k7QaR5BbEOb51aDheCaRm2VKzFbxN5upotozMXxfLkB2J9voFYvvtV5MONIncWFOuiFzy7e3Tdx3YQyZtTLK99ItanqopUvEtk8lciOWJTp3E33EhqClujhFjfbidyXyFbGVDOZTtVvjL/G5Fb4sQ6vI1tQPP2unJdZOoGsYz/UgT/xjT5rbYiRQraUkBnnvq1bVCc9JX6yPpqU7H2qm2zuDCrenGuWCvdLZYvfhDZeFCkVkmxjmqfWk5vyqLLMWODrU2cy+EpDS+EHW0o49fYUiqcX6xL+6Uto277pg8qo0L2nxAZ1EysA5va6q7dCsa+8047kZvjvG8TGBvxS22sUI43W4q17cN2C9aex+gvbK4L8IxvJVK+aCqF42fEMvhTkTV7bP1uUHPf2h0pwSX1xmKRzYdE7rlN1dHarHyqJe0iD2vLCo7t3uZhsWw8YOv/SAOz78r3qHI68Da0n/X9Trb36EbfkcXbbd+6cpvpPjjwYxuLbrVU/7DWKmlLw5XYog0Pn0odSAx9VC5ft/d168r+qZ4A/Z6hve8vLNYRbUTgTsHlzs3X5uFUtyLK0XSMvZb2Ohr7bSZ5unsFTGWxy/JdShBTRrRxPSWD5f3iHNsL5aulDeHsNEWsrSqJZd5W2xTQ6MpBw8//RqzjOqgXUvn+9p9QA4Hy+/kg7Ogo1lFPilQoJnItSax5c3ieYqKjDf5UrD1r2/Jv+75Yn62jXm41i6lfxtap0NneW2NzXRTKJ7LoOyWeqpwQEpQT97/XUaRuaVsn7z9frLN6eu+6Gr9GLPv+sA1s8NN/uFEsPx4T66QuInmy29Js9Z5Y/9NGpN0jNjF4YY5Y32hpm2npl/OPf93z9CTK+B6D8Yb9tkElLqetHN/+ktomntLwQtjtSeDe5z4S68TOroW9/wIRtMcLDURyZBOJtqSuYei+MaSl+kz1nbOXbH0A/Dy1yW9/i6Xnh8ogkAZlRA6dFMtL88WK9LSQoN3hb4YA3lFQZNkOsczeLNaZPWwD7qnztllox+q2dt973OZuRBmq3eeJlO17/Y48U0OkZcXUNLSgIQ/4ihuXT7/dfz0lVgxsZYqIfPqdWBZ8k+oGvVESJfAYFNObqbmzhtFWXabZdAB1/f6wrf+91sxnYRf0p7fa2dKBO0i/q98fEUu/ebZBqdydItt+tb1XzrN8byx2PYjogUe3hh95OjeweYRd+71hWerO7FxawJ62QazjnrYJjK8Xpn8jlok0ezBVpJAGBozuM8T6XL3UvLX7pu9jts98EHZr73q+W0qwZoYsEWvtUkrEVDkr3S3Wvg3FMmSxWJ+tK/J/+W0LwR2qKetVXVgc7jHDNiCkU06JiRbr4BbeETt3WSR7TKpwOYueq848+Sux/PKXbcBJTrFZ7MaOrEXjnSdssxAvLjUjypMzdR3k4jUlNkowvGl/V1aVO6vck7Av3i7Wj3o5Lu5pMew9S6wj2qYaG6grPgML+I/d9B17m1xPEmUMGAwAJXzGNkMa3x1OnWXimV1HlUWsBnQMgr/85WgUoU1OnrMN0N5cznngmXlbRf65aNt4AMNryXbHd2fpDrEs22H7LNpia/eq96bOLv9JEEvHKTYjwNDumRJ21AtGl2EdTr07mLX6arGjfVxtwsBs8VpSantrca5XWuSJyqk0MyPsfuRpXmGH1TJ0iVjhitBTWOfSjlktclveVNeHN53VeA/883CVOLsm3LzUDp3FF2HHFNlbK8lYvk+2qRdccmVTf1v2HFeCbnl/re3FgGA++YHIjt/S1Nw+zXPlY8dnm38W6/sdvVugRKf+aLOa2Si3Ay6jILrqzPjsv6ts4pc9Jq2w6xej6YPu10+ca3Vjp4pyK2DQavRAqjvIm7bXFjtcVXoHTHSU6xmUJ2F3t9PI3ZQc1iim9egH3rQJXDET14us2yty/rKtdv0eS7Vob1jkcumaWB97QKRhWSVkerHRnYtDjK4BD8w8ia3L72+4bpQlmytb2nbX7kmnd8JTXqqobkRTDfi33uTgjnVwi/riinG2om8wUq6vjQdtbQK3FAZStKl2GWmWmRB2f/I0r7BDRE5dcL9LBSP/y/PFOqy1Z3+1uw6MToappNEnjXvNIuw7fhPL57sEUb6tzSqIZc1PYi1VWCw7jtj8qQlXbeUf0Fjk3hs+dV1XDAZ62u8sQj4Iu1rAfmeFyN4/bKwhiEdO23Yw4OWFVZRVwq7917uOieXrfSJztoh0qi4pAxp7dm3pdvV2V0xmhH3gQtv6gXH7JPKPy2EbSD0J+9F/bK4FrBs1fEDEYhHLmC/UAGl0VSix+fW0yFf7bINuhWJixQwoT3blu1ZiB9eY8YqOSjvLcPN+eBJbfwqRp7yCLezK5Yk+j5kYZhrwKGD9r0FZR8OSwp6OuQB3wkvzxNqrjvtpOkCv2J25bXHuhN0bVwzyX/Ctw35rB4se1XNjnXhjXKp7bsxaJHusWP/bXuSzHTb3BnyoeOm126VJeYfOpV54vU3MSUTsO40Kxnm3tRMs2k8U6xstUmcdsMp6f5S+sPvbFQO3y9wtNt+nXhgGnz4f2dYP9GfpwfWnj92dxa5dTPjdhcGF6FObfLJNLOv3pelbcG0oYYe1uOg7m9vlxiKkch9ip9crTWztBP67jjqk4VAGbzqhK1fM1p9trhisnXjrOjBawQGw2JXbCXV154rRs4gpXVJn/3jm93/SLp66sdgtby23+dz1GoA7PzmMsTdv/B7GeWDXzN0960ee5rTY4SLBgqAb37ldnGqVSvUte9NRne9xJ+y4z3nxdOZGke1HUhfq9AIXXuBKxW1WU9+5tpVy510xGXXF3BBu7AhS/tmfjoulzQSxzuqRKhroDIMXiXVMB9sLfeCEWEautJVD+3Mzs3gKy+S1T9QuHOvLjWwLoSM+F9l6KHXHCKyUDpNteepFNixewbqB718vnmIBEQNUXA7bguLRv73epqrbXO12wCJi/jwia/eIZfoG24Khu11TxjbPCmFHflhsXrXbNhMsVfjGj6422Rbo8cMaT4unEAf45HF/uaK2vjV4kUjbh1OFBcK06DvbYnTRm5V/XS3mwTWAjQTon09PVgJs7VrL1gbjvhQrFvB1//T0zuhBCruxHq8o8stftnUfPcg7L/bhe1i1/Ro6LJo7rK0EQtiNi82uFk/1oNe+ikiTB0V+PKYWQqVpec9CrRnhPftgrY0vNinAyMJONQwmRp4oS9fptoXbmiVELlxJux/f28XTTPA0p7DDd14gt/tfZQEeptTwv3vzQvvqinG3Zc243RFpYqFoyGLb1jvMLi5edXxxMmux6wVU/OIWv1DTi3CGbYLKClu3TyzDP7P5v8sXddw9ARHBohqsB4hpRrY7GrdgYZtXt1piWbsndTcShB1bzfBSwT2idjc8LtZnqjtse1OuiCOnbVv46pa2iby7XxO7ajMMdJPW2bZUwu+PrZ0QGeMWv0xa7B633+lBP71f896wqC3vrrD1DedyemgTh+2SmKk8VUWsBePEcvW6zSKHOwd5zP/G5qLBL2md290448N2R7R799oivWr79gtk5+2Oxi1+yMOb7XmZsdidtzsa2te+ZoHPsEsFO5VcbXd0/r55BZF7b1N9yKMFbrCy7Vt+82QXa5daYjl/Waz63TT2O6MuYEuuXid02u5of8S47uEnnuYTdnTYH3+3vfDuFk1PnlPbuawPFPHOt+rJMuH3mSPgya/ozkLJXK58mgTsBBzcTO52rEQwL/Nsd4zgRgi5qlPYQ67JwqrAcLFhBxa2KWJP/6rdYpnxP7FO6+bbjDCsoDhWhsIexo0bsKpR2AOGlgl7JqCs9RU/2H4t+sMx17/C9ZxMWN9BYQ/r5mXlSIAEIpEAhT0SW511JgESCGsCFPawbl5WjgRIIBIJUNgjsdVZZxIggbAmQGEP6+Zl5UiABCKRAIU9EluddSYBEghrAhT2sG5eVo4ESCASCVDYI7HVWWcSIIGwJkBhD+vmZeVIgAQikQCFPRJbnXUmARIIawIUdqfmPXv2rEyePFmWLVumvunWrZv06tXLftelS5fk1VdflWrVqkn79u392jm+++47GTVqlEyfPl0KFCjg17R9SQw/2V65apVMmDBBDh48KC1atJBBgwZJ4cKFfUnGq3uTk5Nl+fLlMmvWLNm3b580btxY/vOf/0j+/Pntz2/evFnGjx+v2uXWW2/1Kt1g3XThwl+yePFLcu+9NaVGjd7BKgbzjXACFHZDB4DIjBw5Uk6fPi39+/eX3Llzq2+zSmTNIuyrV6+W2bNnK4GFkGKQ27Bhg4wePVpuvvlmv74yGzdulBEjRqg/9957r6SkpChRj46O9ms+WZEY+s+Sxf1UVk2axkvu3AWzIlvmQQJpCFDYDUjOnz8vffv2ld69e8sjjziFGMuCzmMGYdczkrZt20qtWrVUrfHZwIEDpWnTptKoUSO/kpg0aZJK/5VXXvFrusFI7NKlMzJ1Sktp3WasFC1aKRhFYJ4koAgEVdivJom0X5Qode6Okhcqp1poU75PlmX7U+TT9rESl03kZIJVXl2bJF8cSlGFblwiSkY2iJHb4yzq/wnXRdouTJSKhS1y6brIx3uSJTFZZF7bWGl4b5THpv7333+lR48e8vXXXzvcW6ZMGZk5c6ayJCG6DRs2tH8/bdo0gfgZL51O9+7dZceOHcq9ULx4cZkxY4YULVpU4OLYtHmzmhXs2bNH6tWrJ2+++abcfffdKhnkMWzYMKlZs6YsWLBAffbSSy9Jp06d7Bbs1atXlTU9ceJEgdvIlZsEaY8dO1bWr18vd955p5p94D5tBWv3x5gxY+TkyZPSsmVLef3115U1fuTIERkyZIi88847UqRIEXv1fvnlF/VvsMB14sQJdQ/cKCVLlpQXX3xRmjZpos7LRxmRHtwq27dvV/XHPcOHD5eKFSuq5//73//K22+/naZtNFedBhjiqlOnThoXFXhu//57xQwuoy5duigmVapUSdM2HjuBH26AsH80q6O0bjNaChW63w8pMgkSyBiBoAo7iuws4s5ir/8fl12UmOP/L69OEvz/w8djJTYqVdh//CtFhtaJkfZlo+V6slXy5bSo7729tDDDOnVnsWvBcSUe+vkrV67I0KFD5YEHHpDr169L3rg4JXjffPONTJkyRYm5KxcHhL1NmzbKLQGx/f333+Xll19Wf2ApQ8imTZ8uBw4cUH7+XLlyyfz585VvGr55uI5OnTqlZh0dOnSQRx99VI4dOyZvvPGGPP/882ogQRqLlyyRrVu3Kis5Z86cAjE9c+aMcr3s3btXCXZ6fn64qlCm+vXrq3JC9OGD1+XUjDBIIO8SJUrIypUrZfHixQIL/bbbbrM3CQQeV3oWu7uZDPJFXV944QWpXr26/PDDDzJgwAD1x3nQddUHrl27JvPnd5afD21I83XXbgvkvvvqeNt11H1nz/4hC+b3pLD7RI03B4JA0IX9t7NWab0wUT5oFiNVi0TJT39ZpcfyRPm4Xazcld8iiSki565YJS67RXLE2BB8fjBF4r9OklUdY5XVri32UrdYZGzjGLHZ8b5f/hL2zp07S7NmzRwKoN0ZEO7atWur7xISEpSgwSKvWrWqstidF08//fRTZfVC7LPFxsqFhATJnj275MiRQ6UBcXvttdeUBQzLH//HwIFZAWYJ+h78DWsbwg8LHkJcunRp9T2sdpQDgxEYeFrAhQ8eQq0HE6SxYsUK+fLLL9VnmBnAYq9UqZJ9gfmff/5RgwvKWr58eb8IO6z5Q4cOKYsdTDBojRw1Ss2SvBF23H/5ylmXHSVbtjiJjc3mdSdSs4ftc2XHjk+kc5e59K97TY43BoJA0IXdKiLdP0uUovksMqR2jLy/LVm+P5Fit8ZRaYj/iP8lyVdHrHL+Kp4QKZzXIus6Owo7XDoDa2R80c1fwu7K4nfn7kFdtPvBlbDjs3HjxqkdIVhUxACxaNEiWbp0qWzZYos3anQZwc0CNw0GhCZNmqjdOxBY40DQtWtXZZk7XxBmiLIni92VlY0BBa4VuHcwk4CwG2c17thmxmLHs3AfwQWjL3xWrFgxr4TdXy+U9q0jvWc6z5GCBe/yV9JMhwQyRCDowo5Sf/lLiozZmixzWsdInxVJ0qtStN03rq3xnLEib9ePkXw5Uu8PNWGHpfzcc8/Zfeq6xSCEEF5Pwp43b161BRGiDMu3YMGCcvToUeW7hqBp/zfShbtk586dyv0Bi/y9995T30OA4XKBVY/njVdcXB45fvwPjz72cBF2f7liYK0nXDwtX65+S+F8vNUYn6z9DL25fIgE0iFgCmE/f1XkiU8SpUmJKOVmgcDrhVG4Zp76NFE+ahUjFQvbHOa45/V1SSFlsWu3S926dR2sSVjYelHTlbDPnTtXLQzGxw+VixcvqR07WFDVawAQarhRtLBj0Ra++WbNmipxgehMmjxZLl++rO6DyMMlgkEG7h996XK42hWjfebwqcPX760rJtAWO9hgfcEMrhhw/Ouv/bJgfi95qsNULp5SdoNKwBTCDgLDNyTJzF0p8nS5KBlR74YzXUT+vmSVpvMSpX7xKOlbJVq5ZZ79PEmuJ0tICTvqCEGEuwK+bAgz/MNwm8BtoXfepLd4mph4XeLjhynrHpY/Fmnxw51t27bZd+9gEMBiIhYysbvm3LlzKs/KlStLx44d7Quwa9eulcGDB9vzXbhwoXLBYFHX0z52V4unWAPAD7kg/K4WmAPhisHCMOqJXUgZWTz195vHXTH+Jsr0MkrANMKuLfNpLW2LqMZrw28p0n91kvx+zirFC1qk9f3Rsu5wikxoEiNYMNXumkD62J23O+rywb8L4YTYevLRw3r+38aNyrr+9ttv1T5xWN81a9RQu2aQx5w5c9SWQPjVcTlvdzRuM3zooYfU4iR+mQmhL1WqlBLunbt2qR8TrVmzRgk3fj37zDPP2P3scEGsWrVK+cNh3WO3DASybNmyKk9vfnnqzXbHzFjsztsdjf0BawF6xoIZCrZncrtjRiWAz4UjAdMIezjCZZ0CSwADEC4Mirj0YADrvVWrVoHN3EXqehG1eYu35Z57amR5/syQBDQBCjv7QsgSwD55LCZjtlKoUCFZt26d2tePH2fprZ5ZWTk101k5RGXZsNEQLqBmJXzm5UCAws4OEbIEIKRfrlkjU6dOFZw5g+2d+OGWdikFo2I4BGzunK5y7321pEGDV4NRBOZJAsE9UoD8SSAcCWDASUpOosUejo0bInWixR4iDcVikgAJkIC3BCjs3pLifSRAAiQQIgQo7CHSUCwmCZAACXhLgMLuLSneRwIkQAIhQoDCHiINxWKSAAmQgLcEKOzekuJ9JEACJBAiBCjsIdJQLCYJkAAJeEuAwu4tKd5HAiRAAiFCgMIeIg3FYpIACZCAtwQo7N6S4n1+JYBz5HGiJM51MQYIQeQnnHypT8zEOfE4D+bPP/+U+Ph4FdeVFwmQQPoEKOzsIaYi4CzsOAMGRxA7DwCmKjQLQwImI0BhN1mDRHpxjMKOwNuI9tSnTx8VwIMXCZCAdwQo7N5x4l03zjufPXu2ivp09uxZadGihQwaNEgKFy6s+OhAISVKlJAZM2aoz5wDhSDICNwsuIxBuDVgLeyIKjVy5EgV0QkuGx0+EPfBPbN8+XIVKASh/lq2bKmiUCGwNQJvwMJHjNfbbrtNJYv7kRYunP5oTGvt2pHyw+7F0q37IgahZi8PGwIU9rBpysBWBCcWTps+XQ4cOKDEEQG4cfY5Yo6OGjVK+b4h7MbQfvCjQ/ghzM4WN75DQO533303jY9969atUq5cORUBCv51iLu+UI7FS5YI7kEM15w5c8q0adPkzJkzKkg3RHzgwIHSsGFDadasmXoMln/fvn1lwIABKjqV8aKwB7bfMPXgEKCwB4d7yOUKQb2QkCDZs2e3h9jT4gwr/O6771bCDpGfPn26FChQQNVx1qxZ8uuvv6pg3Aiura/0hP2NN95QwbdxrvrkyZMdgmZApBGIGwNG6dKlVXKw2iHyiCWLhdgVK1YIwufpAcf5/yEHnwUmAR8JUNh9BBbJt1+6dEkWLVokS5culS1btigURneKK2HHZxBnuEZuuukmr4QdFv7w4cNl//79kjdvXuVm0e4TDAhdu3aVvXv3pmkKHQvVaKFjcIDgV6tWzW7BR3Ibsu6RQYDCHhntnOla6m2HEFS4UAoWLChHjx5VAgyLHZayv4QdbpZ33nlHEPru2WefVf7xqlWrqjpA2OFyefPNN1UZjFdcXB41K8DsYtLkyXL+/Hm1DoC04I/XPvdMw2ACJGByAhR2kzeQWYqHxdLevXurxdBHHnnELrJwgaQn7Blxxeh97NmzZVN+/YIdmHIAACAASURBVG3btqntjvnz51duF+yUgTtGiz0Kg4HHuCh68OBBGTFihNx///1qptCnd2970GuzMGU5SCBQBCjsgSIbZukmJl6X+Phhyr+O4NFXrlyR8ePHK9GdOXOm3WLv1KmTspDr168vhw4dUr5wuFJq167tQCQ9H7vxB0qnT5+WF198US2+durYUaUBsV+7dq0MHjzYnu/ChQtVvnqh9dq1a8oFs2HDBsFOnpIlS7psES6ehllHZXUUAQo7O4LXBE6cOKHEE1sNH3roIWnfvr1s3rxZCX2pUqWUK2bYsGFSs2ZNWbBggUoXwt6uXTu7NW3c7mjMGDtb2rZtK84/UMI9EGdskZw0aZIScoj2qlWrlHvl999/l3r16qmdN85BrLFoCrcOyoRFX1cXhd3r5ueNIUSAwh5CjWX2orrysQerzFevXlUzBfjYa9WqFaxiMF8SCAoBCntQsIdnpmYQdiycnjt/Xj7//HPZtGmT+rESfPO8SCCSCFDYI6m1A1xXMwg7dsLgx0iw2OG+wf56XiQQaQQo7JHW4qwvCZBA2BOgsId9E7OCJEACkUaAwh5pLc76kgAJhD0BCnvYNzErSAIkEGkEKOyR1uKsLwmQQNgToLCHfROzgiRAApFGgMIeaS3O+pIACYQ9AQp72DcxK0gCJBBpBCjskdbirC8JkEDYE6Cwh30Ts4IkQAKRRoDCHmkt7qG+rk5XND5ijGCUJ08edcBWnz59pErlykE57xxRnRCDFRGScNokLxIgAR7bG5F9wN1Z6IDhjbDrINRFihSR77//Xh3l26VLF2nTunVQxD0iG5GVJoF0CNBij8Du4S9hx9nouHbt2iVvvfWWinJUtGjRCCTKKpOAuQhQ2M3VHumWBicWIhrQxIkTBaHqcNY4AlkULlxYPefqdEVY4IhNihB2//77r/To0UO+/vprh3zq1Kkj06dPlwIFCiiLHcEp4NpAhKSEhAQVDg+RkRB6ztWggHuQPsqDSEcIU4dgHAiEgVB2LVu2VHFSEd1In5OOAiAgdvny5VXwjBkzZqiAHIiKhChN3tS1YcOG9nroQB36A9QVZercubMsWbJE/YHbCDFanU98PHPmN/lwRjsp/2AbqV/vFc46QuidYFFdE6Cwh0jPwDnjCAl34MAB5VPOlSuXzJ8/X/bt2yejRo2S3LlzexR2XVVPFjuiHCGmKIQTEYoQneiNN95QwujuWTxz8803S+dnnpHFN4QUQacRcBqiizB5sOhz5sypAmBUqlRJKlasqNJ+6qmn1L8RoBp/7i9VymNddV30QFGlShUVgcko7BjE8ubNq/JD2RB/9fDhw3Ze+l4I++yPOkmZsk0p7CHyPrCY6ROgsIdID4GwX0hIUCHeYNHi0iILUYUV6sli91bYjTFHke/IUaOUQGKRND1hR/o9e/aUfv36KUtZRy7C7AJWP/zwCIQNoX3iiSekXLly9n/DaocQDxw4UB6uVMljXb0VdmPQa5QdAwd4YX2AFwmEKwEKewi1LHaALFq0SJYuXarcGLjKlCnjEEwa1rt2q+B7oysmI8KOZyCEuODa8GSxV69eXbld3n33XeViwaUHh+LFi0uzZs08CjvE31NdvRV2DBRIzzgQGssWQs3PopKA1wQo7F6jCu6N8FtPmDBB9u7dq4QTLg74zuEzhvBCRANhsXsj7FeuXFG+/scee0zuueeeTAs73DKe6kphD25/ZO7mJkBhN3f72EsHd0bv3r2VS8NogcKK1sIOaxrh4LS/Gw8vXLhQ/vjjD2Vt6+v48ePq//CBa6taf+dqu6Mni924KyZfvnyZdsXcd999HutKYQ+RjstiBoUAhT0o2H3PNDHxusTHD1P+9eeee05gJWPXyrZt2+yuGO3Lbt68udSvX1/279+vFj0bNGjgIOw6LmjdunWlTZs2Ki0sxiJtX4Td1T521Mx58XTevHmye/duh8XT9HzsFSo86LGu/hR27orxvT/yCXMToLCbu30cSnfixAn1YyBsJXzooYfULy03b96shL5UqVLq3h07dsiQIUNkz5490rp1a7Woeu3aNQdhN96HhVK4UEaOHKn2oHsj7F27dlUuIXe/PPVmu2N6wo4Ziae6wu1k3O6oQWGBFrOWy5cv2xdjPfnYuSsmhF4CFtUrAhR2rzDxJhIgARIIHQIU9tBpK5aUBEiABLwiQGH3ChNvIgESIIHQIUBhD522YklJgARIwCsCFHavMPEmEiABEggdAhT20GkrlpQESIAEvCJAYfcKE28iARIggdAhQGEPnbZiSUmABEjAKwIUdq8w8SYSIAESCB0CFPbQaSuWlARIgAS8IkBh9woTbyIBEiCB0CFAYQ+dtmJJSYAESMArAhR2rzDxJhIgARIIHQIUdpO2lQ7GjKAazmemB6rIOti1MepQoPJKL12c/16sWDGHGKbGUyf1yY06KDeOD0a80+eff17y58+vkjaeIR+MOjBPEggmAQp7MOmnk3dGhT29QNWeqhpqwq7jo549d04FzD5z5owKHoJz5Snsnlqb34czAQq7SVuXwu7ZYjfOLE6ePKmiSyFYdenSpSnsJu3XLFbWEKCwZw1nj7kgOMWcOXNk3LhxEhcXJ506dVJBNIYOHWp3xSB4BgJirFq1Su6//37p37+/tGjRQqKjo0Vb29o9oTOsU6eOPbg1gkpv2rxZpYEAG1WqVJFXX31VataoIZaoKHsa1apVk/Xr19uDdSAK080336ySvHr1qsyePVsmTpwoiNiE/BHvtHDhwvY6IkgGLObPP/9cBeNAIJBnnnlGWdK4jOVAnerVq6cEGUFBtBvFG1eMUdh13FUEH0FgDV8s9rVrR8oPuxdLt+6LpGDBuzy2FW8gAbMToLCbpIWWLl0qixYtUq4EiOisWbPks88+s4e9O3bsmLz88svSvXt3efTRR+Xw4cMq7B2s1Fq1atlrkZ4rBrFJMVDgD6xaRFtCRKaxY8dKyZIl7cIOnzViosbGxsq7774ruXPnVnlli42VadOny4EDB9SAgHB68+fPl3379smoUaPUfZcuXRIILgJSt2zZUi5cuKACbj/88MPSq1cvVc5vvvlGpkyZosT81ltvlWXLlsmGDRtk9OjRqu7e+tidLXb42JFm+fLlKewm6dcsRnAIUNiDw90h14SEBCWkTZo0kWbNmqnv/vnnH/XZ66+/rix2xDy9ePGS5LvpJmVda8s2JiZGibu+0hN2WNsIk5c3Lk6lgf8j/erVq0urVq3swm4UTJ0exPauYsXkQkKCZM+e3W59G7+HxY2ZQ58+fWTAgAFK3HEhePa5c+fULAN5In3EWq1du7b6Xtcfs5SqVav6LOyo06RJk+TQoUPqWcx4fLHYTdAFWAQS8CsBCrtfcWYsMYhhv379lBUMSxqXs48d7ot9+/crS3fTpk1KLHFBmDEAeCPsSGPL1q1qFrBx40blSsGFhUfsKnG1eKo/g7sFQg2LHDMLzDC2bNmini9Tpox9ZoE8Plu2TFn6iKWK2QRcIxBbXa8ePXqIs8vIWA5vLXZjGhgUMfvAbEMPevjbyCZjrcOnSCD0CFDYTdBm3gg7LOO+ffsqX3XdunUlKipK+bnht/ZW2OECgRsGA0iFChWU9f7WW28p8fVG2B988EGZMGGCCmSNbZgFCxaUo0ePKlcLxNi4LRNWOFw9X3zxhXK94HtY46gr1gbgd9c+dd0EcO3oHS2ufOzbt2+XESNGqMEFg0Pv3r1VPbDmsHv3bhXEWvvxabGboGOzCEEjQGEPGvrUjLVfumHDhm5dMdpC1uIFy3jkqFFq4dQo7LDk8X/46p33v2NhNikpyX6/XnDEYqk7YT948KAMHjxYxo8frxZCIaZw/cAKx4UBB/lpYT9y5IiaDbRr10753HGtWLFC+dBR9sTERHU/BifkqS8sHqMuuLC+8Mcff6jZCD5DXUePGaPSg5vHeWZx+vRp5d7p2bOnGjxosZugU7MIQSVAYQ8q/tTMV69erXab6MXThQsXCv7AbQKB/uGHH5QgwmKFrxpuEFjfEEejsJ8/f15Z9hBO+LEh3toSRh4zZsxQbhIsUq5cuVKlgV0yRmF3t3gaFWWR+PhhyiqGxY20Ifjbtm2zl/PUqVNKfJs3b64WTyHYmFlAoDFTwN8oB0QeeWOAgG8c9+j1BONCMfz/qCt86O+9956y8l25jIw/YNJWP/z5KKfx0iyMn3FXjEleAhbDbwQo7H5DmbmEPG13xPfLly+XMWPGqMVGCDFcIRCvF154XmJjs9kLABfIkCFD1JZG+Lkh3EWLFnXYqgjxg1sHA8Fdd90l2Cao/foNGjRQg8rOnTuldevWakeM3u6IrYzwZaMsDz30kHoO2zIhoKVKlVJlgNWOXTJwkeCXoM6/CoUF/r+NG5WVjzLCFYRZgN52iTSMWzvhP8egULZsWZW+K2GH1Y5dQ926dVOLskgbg4fzpdcTKOyZ66982twEKOzmbh+WjgRIgAR8JkBh9xkZHyABEiABcxOgsJu7fVg6EiABEvCZAIXdZ2R8gARIgATMTYDCbu72YelIgARIwGcCFHafkfEBEiABEjA3AQq7uduHpSMBEiABnwlQ2H1GxgdIgARIwNwEKOzmbh+WjgRIgAR8JkBh9xkZHyABEiABcxOgsJu7fVg6EiABEvCZAIXdZ2R8gARIgATMTYDCbu72YelIgARIwGcCFHafkfEBTQBHCcfHx6vjdHF6ZFZdOqQfzm03XsZITq7K4ioyU1aVmfmQQFYSoLBnJW3m5RMBb6IgOZ/Dnl4GFHaf8PPmECZAYQ/hxgv3olPYw72FWb9AEaCwB4psFqer3ROIS7pmzRoV5AIBKhCP1Bhb9LvvvlNBMJ5//nn58MMP1X29evWSYcOGSfbs2VXEIx3Q4+TJkyoKEuKb3nrrrfYaGYNYuHJ/uEoD0ZF0sA4E2li5apWKn4rQeygnQtvpcsIKR5g758tVkIz0LHYdcAR5dOnSRQXvrlKlikNIPuRx7Nj38tGsDtK8+dvyYIU2WdxyzI4E/E+Awu5/pkFJUQv7n3/+qcLrIboShBBh58aOHasiGeGCsCNkHqIaIah0vnz51OeIJwrBXbxkiSxZsiTdNHQFEe8Uoo9Qezq+qk5j69atKmRfzpw5VTnOnDmj0kTkJsQ/hV8eYf4Qhm/ZsmWybt06VU7nAQR5GUP/OcN1J+yI4oQQgQjTh/B6EHn8/80336SwB6WHMtOsJEBhz0raAcxLC7vRIoXFDcscYla+fHm7sCPUHWKfOi94Ikxev379pHPnzipcHS5YuQhbB4tXf5aesCPmKQaMQYMGSenSpdWtKAfEGTFOIeSw3hG+rlmzZup7BPPG4IAwfLqc+DwzrhgsrGJQ0zMRHfy7ePHiaYQ9gM3CpEkgKAQo7EHB7v9MXQm7/qx+/frSqFEju7DDFTN9+nQpUKCAQ0HcWeAjR40SV4Lo6n581rVrV9m7d2+aSn755ZfKsu/Ro4dyvSCQdXpXZoQdz8L1gwFJX1w89X+/Y4rmJEBhN2e7+FwqMwk7XC6YJcAdZLzi4vJIQsJFCrvPrcsHSMA3AhR233iZ9m5fXDHuLHZ/uGK0+wfumKpVq9p5YUE1OjpadDmNrphr164pP3ulSpUcFnonTZqk3DQZ8bHPnTtX9u3bR1eMaXssCxZIAhT2QNLNwrS1YEKchwwZInFxcWrR8ujRo8pXjf/j0rtiXLliXC2ezps3T3bv3u2wAKur5c51M236dFm7dq0MHjxYuV6Q58KFC+Wdd95Ri6N68RS+fnwPFw3uHzlypH3nDPJYvXq1zJ49W30Ot1FiYmIa95G7xdNjx47Jyy+/LN27d1eLp/gx1YABA9QfLBwbL+6KycKOyqyyhACFPUswBz4TLezY/YJFQ2xjxFZFbHfEgqW+0hN23OPNdsf0hB3fwQJH/mPGjJHff/9d6tWrp0S2bNmy6lHn7Y4tWrRQi62FCxd2AAVr/f3331cDVJ48eeS5555TQg2BxwKsp1+ecrtj4PsdczAnAQq7OdvF51K5csX4nIiPD8Bix64TzAhuv/12H5/m7SRAAoEiQGEPFNksTjerhB0WfUpKsly8eEmmTp0q586ds/uxs7jKzI4ESMANAQp7mHSNrBJ2vZ0RvnvsO4dLxPijojDByWqQQEgToLCHdPOx8CRAAiSQlgCFnb2CBEiABMKMAIU9zBqU1SEBEiABCjv7AAmQAAmEGQEKe5g1KKtDAiRAAhR29gESIAESCDMCFPYwa1BWhwRIgAQo7OwDJEACJBBmBCjsYdagrA4JkAAJUNjZB0iABEggzAhQ2MOsQQNdHX10gT5ZEadJNm/eXJ2Z7nw6Y0bLklXHI2S0fHyOBMxOgMKexS3kTbi3LC6ST9k5iy7Of0eQDJyxPnr0aIfz1H1K2HCzP4Xd1ZnxGS0XnyOBUCFAYc/ilgo3YQc+iHvfvn2ld+/eHuOYeoObwu4NJd5DAu4JUNj91Dt0gIrJkycLAjw0adJEXn31VXtwCUT66dmzZ5rcEERCR/TxJsgF0tm6das89thjKgjFt99+q47NffHFF1XaZ8+elQ8++MAehALBnJ9//nmBywQXgmAsWLBAxo0bp6IqderUSTZv3ixDhw5V0Yyc00BAaAg27jOGtqtSpYq93M7C7iqqkXMgaV0O8Prnn3+kQ4cO8sILL6iTIp2FHfciTN7x48dVXXU0KGNdncv577//qtiqX3/9tQPzOnXqpAnknZh4XT5b2l/+/vuwdO4yV3LndozV6qcuwmRIIMsIUNj9hHrjxo0yYcIEeffdd6VQoUKybt06mT9/vowfP94hgpE7i91VWDqIPqIhjR071i7MEE2ElINgY6CIjY1Vf3LkyKFEe8SIEZI7d27p1auXijQE8c+ZM6caZCDMeH7JkiWCgNMQQ4Ssw5+ZM2cqYUfUovj4eClTpozynUN0EZi6Xbt20qpVqzSii3Iv+vRTFcZOu2I8CTuemTN3rmzatMkhjN/p06fl7bffVi2C44AxeCBPcAUH1A1lxuWpnLpZvXHFUNj99BIwGdMQoLD7qSkgZjt37rQHnYDI7tmzR4oVK+bgd3Yn7N4GkkY+y5cvV4KtrXBdBQjmufPnJU+e3BIbm019jFB4sM5hGcfExKhFTswmmjVrpr6HcOMzCCmEHQMUhN4YJxX+c+SJmKUWiyVNWLqKFSuqwUeHvvMk7MizX79+6g+exQVRR56YXdx2220qDwS3TkpKkjVr1qj0jee+eyonBjNc3gi7n7oAkyEB0xCgsPupKSBMsIqvXLkitWvXFkz57yleXCxRUQ45uBN2d4GhR44aJcWLF7e7PdwFb9aZQDTnzp0rS5culb1796qPtfsB/4aYopylS5dW38FlAWF/7bXXlLC7cxnpNHLlyqVEt1y5cvbBAYMHXCUQX50GXESwvjGTwGV0xXgSW+2KwcB48OBBFfO0UaNGDhw9lRPBrynsfurcTCbkCFDY/dhksJh/PXxYtmzZogTygQceUG4MuEb0FUhh14KI/OCmwd+7du1S1vr06dNVEbwRdogpAkcbL1jq+W66Sa5dv253k+i1AdQbA1DevHmlT58+qu7+EvaaNWsqlw0GDr0GgHIhj/TKqQdUT4OIH5ufSZGAaQhQ2P3QFPDRrlixUu688067awELe1gMxJ9HHnnEngsECv5hWMnGyxdXjLNo6nSOHDmi0oWfX4vgN998I2PGjFHCnj17dhk4cKA0bNjQrSsGbhfEMoVfW7s+INy4IJaudqxoYUf6L730kiDPRYsWKdcNXCL6ez3zcOWKSUhIUNsmsSiMAUK7YuDbh+V/4cIF5fvXg6SncmomWHAFE6wpGAcGPzQ7kyAB0xKgsPupaeD+WLVqlRKQO+64Q3766Se12AcLvWTJkvZcsMg4e/ZsGTlypMBdgAVO/O1q8XTevHmye/fuNIun7oRd706pVauWWnSEewi7SOAegrAjH52/u8VTDEgvv/yyqsOzzz6rBgPsooGvG1saUV69sAmLHUIPkYX4vvfee1KhQgU5duyYSqN///7K744ZDNw/mL3gGb14iueGDBki+fLlE9T1zz//VOKNy5gH6oH0Hn74YTWTwCKwp3LiHlyaSd26daVNmzaKBdxJ2kWEe7h46qeXgMmYhgCF3U9NgcVSWKlTpkyR/fv3C8QV1mvNGjUc/Oyw1rHwCb9xnjx5lFB1795diZW32x3dCTuqAr80Bg0sLtarV09Z57gfwnr77berPObMmZPudkdY1HDf4NelKCPEWG+ZdP7lKb5HPhD9cg88oOoK4V65apWaOZw8eVK5hWCRly9f3r5W4Lzd0bgt09WsYN++fcqNhIGqatWqqtXSK6exWbH9FAMIOGBGAD5Fixa130Jh99NLwGRMQ4DCbpqmyJqCGN0qyFH7oDGzuPvuu7OmEMyFBEggoAQo7AHFa77EV6xYoRYdYSGnpKQof/r169fV3ni4XXiRAAmEPgEKe+i3oU81gEsELhb4tOHKcP5lqk+J8WYSIAFTEqCwm7JZWCgSIAESyDgBCnvG2fFJEiABEjAlAQq7KZuFhSIBEiCBjBOgsGecHZ8kARIgAVMSoLCbsllYKBIgARLIOAEKe8bZ8UkSIAESMCUBCrspm4WFIgESIIGME6CwZ5wdnyQBEiABUxKgsJuyWVgoEiABEsg4AQp7xtnxSRIgARIwJQEKuwmbBScwGgNy6CNo/VVUnJ6Io4M//PBDdawAYpvizPLChQv7K4s06ThHavJHRt4ECHfOB88cPXo0zXn4/igP0yABsxCgsJulJbKoHBg0Jk6cKDooBwJh4NwYRFrSwagDUZRACLsupy9RkijsgWhdpmk2AhR2s7VIgMsDge3Ro4eKpKQjO+loTx06dEgTW9RfxaGw+4sk0yEBzwRCXtgRSHnUqFESFxenrE4ErUBoNoREQ0SfihUrKgoQrw8++ECdbHjzzTdL7969pVOnTirABS4d5AIBJhCYoUmTJio4BSIA6QtBLBCwef369SoMHiIEtWjRwp6GMQ8843xyog4uMW7cOFVe5L9582YZOnSoCtsGy7Nr1672INSIImQMoacDUDRu3Fi2b98uM2bMUNGZhg8fbq8nzlvf/v33KiCFPp4X5apSpYoKcoF/o+7ghAAZuPDMhYQEdWwvIgvh/5s2b1YBKVBn3IfoR/q8djBfuHChqjtcRsgHwTQQBlCHrvMmoMeJEydU+Lzly5ererz44ovStEkTe2ASPQihrGgTtB3C66HexkAZ6VnsmJkgyAYCj6C8+jnn0IRnzvwmH85oJ+UfbCP1672SJgi551eJd5CAeQiEhbBDKBGaDS/vmjVr1L/XrVunQsNBHCGICLlWpkwZ5U+GXxlChXiaCCGHC88iziei/hQqVEg9P3/+fBk/frwUKVJETp06paIEwap99NFHVfg3nGGOyEIQPog2QuFB2Hr16qVCyCFSElwdGCAwgMANsGTJEhU+D4MLxBF/Zs6cmSYep6ug11rYIVbIu0SJErJy5UpZvHixCvZ82223qcEB5YTIVq9eXX744QcZMGCA+qPD0i1eskS5XTCIPP744/bYprpbYmBEJCgwQtxTxCJFGDvtqoGwY1CC4Hbr1k1FRxo8eLCKTtSxY0eVzNKlS1VEKV1XiPJnn31mryvaZtCgQSpcHcp56NAhNRihXnomoYUd4eww+CE4OM6OzxsX5yC87oQd7Yx6165dW1q2bCm///67CrHXoEGDND52CPvsjzpJmbJNKezm0SeWJIMEwkLYP/nkEyXmP/74o+h/I6CEDiGnLUyIJSxlXBAqWIo64DJEd+fOnUpcYLlCqGGtFitWTIkwxANCZwyrhs9wwdqGlXvu/HnJkye3xMZmU58jXww6mAXExMQoMcFMoFmzZup7CA8+w+DjHGg5PWGvVKmStG/f3p4GBpfXXntNhZ6DgGqRRD2cA0lrC/1/Gzcqaxt1hCULkcXiKUL3wU0DwYUg4oJwo5wQc4SlQ73ADZYz2ODCALV3716Jjx8qV69e81hXxIjFIibqrmdNKDsG0FcHDlTCrYW9c+fOdmau+rk7YUcbY4EYA2z+/Pnt5fzjjz+4eJpBweBjoUEgIoQdIg9XgfNVp04de5BnWJCwrGEdQtDw3T3Fi9stQ73oiAEA4lytWjWBwBqDIkOoIViwViFyuHQe+DdidiKP0qVLq+/S8zunJ+zaraLTMPrM8RzEFm4gfeEzDFCw2I0XRP/goUPKZXXx4kXlZsIAhPS+/vrrNLwQpxVpaPeXDpCNG8FFD6SXL1/2WFeUCYOx84Vy43NwdbUe4Iuwo0xwExkHDy6ehoYwsZSZIxAxwo4XHIGjjZfFYpF8N91kF28I3a+HD8uWLVuUUGHqDytd+43xLAYAWPZwfyBQM0QR1rZ2k+BeDCL4Gz5/WOsQQLMIOwI3X7x4yaHe58+fVxYsAl/DzYS1A7ByjoGaK1cuJbj+EnYMQJgtGC9Y79rVQmHP3MvNpyOXQEQIOyxJxPaEDx0+Y1zGoM4QuxUrVqoFUeNiK/zU+AOfLxbv4KNt1qypcrXg+UmTJwusU4ii3j4IH712q8BXPWbMGCXscIvAxQHxzKwrJj2LHTOGffv22V1Kzq4Y+NwxWGEhWS8k6kEJ6aJ8qE/dunUdLHzMWLTLxJOw415PdYXbBW4gbZ07t4mr2Yi719SdKwbrJsgH7jC6YiJX5CKx5hEh7HCvYNHsjjvukGeffVaJ7IIFCyQpKUktNEKwIIirVq1Si32476efflKLoXAZYMcGLH6IPNKpWbOmnDt3TolS5cqV1YIhrF6kVatWLbUgC8se/nrkrV0Wq1evVj8MyuziaXrCjkVdlBELm64WTyHiEHYs7kLAYYVjhgI3C2YfsNJRTtQNC5YY1OCzx953vRbgSdhh1XuqK8qJtYH69evL008/rThhwRYL3E888YTdVeW88ojpDwAAHxxJREFUNdMXVwx2AGHxFO2FxVPslMJaAv7PXTGRKHeRU+eIEHYIDfzfcIvAgsuTJ4+yRiEs2pLDYil2cUBc9u/frwT6pZdekpo1aihXDSzfnTd+xIOdN7DKsSPkmWeesfvZYYFicRWWInbKwPrFbAF+9dtvv11tqZwzZ46yIL3Z7qi7ofbTQ4QhrukJO57B7AJb/Fxtd8T3WCDFj5KwsAh3EsqKwUBv7URd9eIqyu/Mwhth91RXlAPijoETi9jg48zTkyvGm1+e+rLdkbtiIkf4wr2mIS/sodRARvcPyq1dCBA3Z392RuvlnId2s8B611s7M5o2nyMBEggNAhT2LGwn7M7RVnRKSory+2NfNvZuwz3kjwsWKtYSsPhp3I+PHS/GH/X4Iy+mQQIkYE4CFPYsbBfsB4crCG4QuIacf5nqj6LAYv9yzRo1aMAl5OoXtP7Ih2mQAAmYlwCF3bxtw5KRAAmQQIYIUNgzhI0PkQAJkIB5CVDYzds2LBkJkAAJZIgAhT1D2PgQCZAACZiXAIXdvG3DkpEACZBAhghQ2DOEjQ+RAAmQgHkJUNjN2zYsGQmQAAlkiACFPUPY+BAJkAAJmJcAhd28bcOSkQAJkECGCFDYM4SND5EACZCAeQlQ2M3bNiyZBwLenO7onAQOXsOZ+Th4rUCBAmRMAmFJgMIels0aWZVyF2jDFQUKe2T1jUitLYU9Uls+jOpNYQ+jxmRV/EKAwu4XjEzEmQDOgUe0KEReQiQjxDZF9KLChQurWxGsA0FHSpQoITNmzFCfIbBJp06dVEQrfY78gw8+KAhsguhWOKly+PDhac6uT0/YEVTk/fffVxGiEAkL5di2bZsKWWh0xZw585t8OKOdlH+wjdSv94o9Di5blgRCkQCFPRRbzeRlxtHB06ZPlwMHDqjoUYj8NH/+fBWLddSoUSrQN4S9TZs2KvwgwtZBnCH8iOTUqFEju7D/+eefKpRgwYIFlTgjTB/OlteRr4DCnbAjihMGFh2PNjY2VvnXEblJhyvUKCHsjKBk8o7F4nlNgMLuNSre6C0BCPuFhAQVPARhCY3iq6NFuQqvh7Pqf/31V4mPHyrJySlpwgAijB/CGSJma/ny5e3FcSfs+n4MGDpIOe5FPFdni93buvE+EggFAhT2UGilECwjXCCIIbt06VIVLBsXAlXPnDlTxYt1Jez4DHFpEVQbg4JzfFftnkEAbFj1+nIn7Pgc1j7i0CKmqh5guCsmBDsUi+wTAQq7T7h4szcE4AJBeL69e/fKa6+9ptwoR48eVf5xWOwUdm8o8h4SyDgBCnvG2fFJNwSwWNq7d2+1GPrII4/YLeVXXnklXWH3tyvm1KlT0rdvXxkwYABdMeytEUWAwh5RzZ01lU1MvC7x8cOUfx1Bta9cuSLjx49Xu1GMrhjsgHnnnXcErhUsisIXDvdL7dq17Yun58+flyFDhkhcXJxaPIXlD6sf//fkijEu4mJQweIpdsjs37/f5eIpd8VkTf9gLoEnQGEPPOOIzOHEiRNKtJcvXy4PPfSQtG/fXjZv3qyEvlSpUsrHPmzYMKlZs6YsWLBAMYKwt2vXzmG7I3a/QPSx3RG7Z+DOKVKkiLrfm1+e+rLdkbtiIrKrhmWlKexh2azmr5SrxVNjqfVCaZUqVaRt27bmrxBLSAImIkBhN1FjRFJRKOyR1Nqsa1YToLBnNXHmpwhQ2NkRSCBwBCjsgWPLlEmABEggKAQo7EHBzkxJgARIIHAEKOyBY8uUSYAESCAoBCjsQcHOTEmABEggcAQo7IFjy5RJgARIICgEKOxBwc5MSYAESCBwBCjsgWPLlEmABEggKAQo7EHBzkxJgARIIHAEKOyBY8uUSYAESCAoBCjsQcHOTEmABEggcARMIew///y1rFs7Wlq3GS2FCt0fuNoyZRIgARKIAAKmEPZr167J9u0z5acfV0jnLnMld+6CEYCeVSQBEiCBwBAwhbCjamfP/iEL5vek1R6YdmaqJEACEUTANMJ+6dIZmTqlpTRtNkzuu6+OyyaAy2bhgmelefO35cEKbSKomVhVEiABEvCeAIXde1a8kwRIgARCgoBphB1xMj9b2l9y5rxJGjYaIrGx2UICIAtJAiRAAmYjYBphBxgEPV64sKsc/32n9Hp2GXfImK23sDwkQAIhQcA0wo6I8tu3z5V9+7+UFi3elnz57lRBjXmRAAmQAAn4RsA0wo7F049mdZT6DQa4XTz1rWq8mwRIgAQik4CphN3Trpi//tovC+b3kqc6TKWbJjL7K2tNAiTgBQHTCXvzFm/LPffUcFl0CrsXLcpbSIAEIp6AaYT9zJnfZPZHndK1xvXRA/x1asT3WwIgARJIh4AphB0Lp1u2TpVfftkk7dvPlJw5c6YpcnJysnz11Wi55ebi/HESuzQJkAAJmF3Y9+xZKau/GCadnplN3zm7KwmQAAlkkoApLHZY47i4vTGTrcnHSYAESEBETCHsbAkSIAESIAH/EaCw+48lUyIBEiABUxCgsJuiGVgIEiABEvAfAQq7/1gyJRIgARIwBQEKuymagYUgARIgAf8RoLD7jyVTIgESIAFTEKCwm6IZWAgSIAES8B8BCrv/WDIlEiABEjAFAQq7KZqBhSABEiAB/xGgsPuPJVMiARIgAVMQoLCbohlYCBIgARLwHwEKu/9YMiUSIAESMAUBCrspmoGFIAESIAH/EaCw+48lUyIBEiABUxCgsJuiGVgIEiABEvAfAQq7/1gyJRIgARIwBQEKuymagYUgARIgAf8RoLD7jyVTIgESIAFTEKCwm6IZWAgSIAES8B8BCrv/WDIlEiABEjAFgaAL+44dO+T222+XwoUL24H88ssvcvXqVSlbtqz9s9OnT8uvv/6qPouLizMFPBaCBEiABMxIIKjCvn79evnggw/k3nvvlf/+9792Pi1btlT/fv/996VIkSLq3xMnTpR169ZJixYtpEuXLmZkyTKRAAmQgCkIBFXYN2zYIO+9956ULl1a3nrrLTuQ1q1bS3JysoOwT506VVavXi2PP/64PPPMM6aAx0KQAAmQgBkJBFXYAeTSpUuSO3dur9gkJCTQDeMVKd5EAiQQyQSCLuyRDJ91JwESIIFAEKCwB4Iq0yQBEiCBIBKgsAcRPrMmARIggUAQoLAHgirTJAESIIEgEqCwBxE+syYBEiCBQBCgsAeCKtMkARIggSASoLAHET6zJgESIIFAEKCwB4Iq0yQBEiCBIBKgsAcRPrMmARIggUAQoLD7SBW/lH311VelWrVq0r59ex+fTv/27777Tho2bJjmptdff11eeeUVr/LCmTubNm2SadOmqcPVUN6BAwdK9uzZ5e2335YcOXJ4lU56N6Gco0aNkunTp0uBAgUynZ5OAGUvVqyYtG3b1m9pMiESiEQCFHYTtvq///4rPXr0UIL8yCOP+FRCiOOECRNk8eLF6tmDBw+qs3UwEPki7Dhh87XXXpN3331XHdJmvCjsPjUJbyaBLCdAYc9y5J4zzKywf/7559K8eXMZ0L+/LF6yRAl9pUqVKOye0fMOEggLAkEV9mvXrsnQoUOVNdmsWTM7UJziiCN6tYV59uxZdbzvrFmz1D04tvf555+X/Pnzq//j7Ha4K8qVK6f+jSN+L168KIsWLZKKFSt61VA4TXL58uUyefJkwRnxTZo0US4XfSa8s5sErg5nlwEOKcNRwzNmzJCSJUuqI4a3bdsmY8aMkVy5cqkyNm7cWLZv326/Z/jw4WnK6E7YdT3TSwMW+4ULFwTM3nzzTRk9erQ6+vjo0aN2nrquKNfJkycFxySjbDfffLPovL/++msHbnXq1LG7XrTF3r17d1VfzAp69uwpL7zwgv1AN1d5YAZw66232tMF5yFDhqjn0aYoc5UqVexcUd/Zs2fLhx9+qMoJnoMGDXI4u9+rxuVNJBBhBIIq7GDtLOKJidclPn6YVK5cWYk9xH/EiBFKMHr16iWJiYlKTHLmzKmENzo62i7sW7dulfj4eKlZs6YkJSVJnjx51PfeXBs3blSWLVwPhQoVUgPL/PnzZfz48fYz4Y2DiFGA8DmEDM8fO3ZM+cNjY2NVOffv368EUQv7kSNH5I033pASJUrIypUrlctk0qRJctttt9mL6UnY00sDwg6B3rNnj9SuXVu++uoreeyxx+wDZfZs2ZQVD1YoJzhikDpz5oz85z//sfvgPblisL4wYMAAefLJJwUD2uDBg1U+HTt2FGtKispjyZIlKs2CBQuqPA4dOiRjx45VAzLq0LdvX+nTp49Ur15dDab4PwYjPWDOnTtXDYwYdMBv4cKFsnPnTtUm3gRbcbdmgUHEF7eUN/2H95CAmQgEXdhPnTol/fv3V2IHKxfCCHHGi4fFP4jEufPnJU+e3BIbm02xwws7btw4ZV1DJLQlW7x4cenTu7dYoqJ8Zvzpp58q0Rg2bJhaaMSAAnHEYh6EUl86L2dhh0WJWQQsSj1LgDiiHkaLHS4Rvej6zz//qGdgyZYvX95rYU8vDb0AiRnLggULpEGDBmqg++STT1RZzp8/r3ijnDgHHxfKDpHH7En70z0Ju/PiKUR37969Eh8/VC5fviL9+vWTzp07S61atVQesMZfeuklZZnjM8y+IPSaN9p55KhRgjbUwo66QNB1m2IAwTMYFL0RdhgJCQkX0/QFDPZ54+Iy1E987lh8gASCQCDowo4XevSYMcpKhrW3YsUKJajaGgcTCCCst6VLlyrxwGV0DbgTW194IvQe8rxy5YqydJH+PcWLp3n53eUFIYR1OnLkSDUg4cJnmAFogYLlaRwQ3Fnmniz29NLQFvuDDz4onTp1UrMFXFrYjx8/Ll27drVzNDL68ssv7Yu1vgo7BsZvv/1WDR7Iw3nh1Vm4dTmN0bCcd8WgDLDiwfPRRx9VbfJ/t99OQfalY/PeiCQQdGEHdUzD582bp/ytsMThS9VWrxZSuGLgx8Xfu3btUta63m7nD2FHOSA+vx4+LFu2bBEI1QMPPKBcA8ZAIKEg7KgL/N8YZGAlw79uFHYMQKgXXCTGKy4uj31WZAZhR9ng4sJAjy2caBNY888995xXLja6YiJS01hpETGFsGOvNYRG+4ThEtALo/DFwk1g3Hb3zTffKPeGv4QdU/YVK1bKnXfeaR9Q4DrAYiD+GLccuhN2uJRgXcLvnJ4rJissdvRs4753CJwWdtQL7h+4Y6pWrWp/CSCgxvUIWN1IA4OAN9sdjRY73FieXDGYge3bt8+tKwZ9AovfcNvcfffdqpxw02FW5apMrt5mumKocZFKwBTCDvh40bHABjeBcXoOnzAEEy94q1atBC4T+GXhMvGXsOv8V61apUTjjjvukJ9++kkt2sI9AN+/vtwJO6z9adOny4EDB9JdPA22sGPxFOVcu3atWvCEaEP44SN/55137LtWNPe6detKmzZtFG/4u/EDJ1f72I3CrhdojYunmJHt3r3bvngKkX755ZfVzAKLpz/88IMaFPEHVjkGGsw40N4YYPLlyyfYqYMFbcTJNS42R+rLy3qTgDsCphF2/aIjqLVRSFFwTMXxkmPnSr169dSvM+HPhfUG/6s/XDGwMmEhTpkyRe1kwUACN0bNGjWUT9ebaT2sTOyEwQDlbrtjesLu6Zenrurp7I/HQJSexQ5hRl0xiGHW8/vvvyumEFm9tVN3Fr0dEayx4wVtULRoUY/Cjjz8sd0Ri6VYZMX2Ucw03JWTrzcJkIAjAdMIezg0DKx2XHpXjvPunXCoI+tAAiRgfgIUdj+1EUR98pQpahte06ZN1Y+E4NrA7pSePXpwJ4efODMZEiABzwQo7J4ZeX0H/MFwxeAXrLiwewPntPjj4C2vC8EbSYAEIp4AhT3iuwABkAAJhBsBCnu4tSjrQwIkEPEEKOwR3wUIgARIINwIUNjDrUVZHxIggYgnQGGP+C5AACRAAuFGgMIebi3K+pAACUQ8AQp7xHcBAiABEgg3AhT2cGtR1ocESCDiCVDYI74LEAAJkEC4EaCwh1uLsj4kQAIRT4DCfqML4KyXlatWqbilCK7sKnAygk/gyGCcjOgc7BrJ4NREhKNDsBBczkcKeMojveAWSE+f7qiDeht7rzH6kade7amc+vkNGzaoQNI4JkGfj4/vcEQvgnc4n/muw+UhziqCori6dLxRpImwg8aA4Majf709hkGHH1y/fr06nRInfuoTOTPKs0yZMjJz5kx1pDHK5KouiIaF+iMPxG1Fv9Dn2xtP3CxQoIDbiFXGfNJrM3ftbnwep3oiehUulBvhFxGa0NhunvoFvw8fAhT2G22JoNo4Hnb48OHqPPZly5YJhG306NEq5iniguIYX5z9gvPDEWUJ9yM4M46yhWjPmTtXnTmuBQ8vW6lSpeyHgHnKw1shco636kt39KacSE+HLEQdEaTDGJPVk7BDzPRlDPJhFGvnMHh6wNDh9bwRducz3XUMVcTPRXAUTzyN3NwNKp4GG+SBGALVqlWzBw1JL+Qh+gbCBjoHL/G2Dd2VRx/XPKB/f/nr1Cl13DGOn0b/vPXWW71NnveFCQEKu4jgHHVYerAedfBlnAWOlxCWe6NGjVQgEEQV0rFYtfAhbB4sNueg3OgfeOkRGQovHcTOUx6ehMgf5857KmeRIkVU10agDZT33Llz6ix2Y/ATswi7c5ug3PgMMy4E1T569Fia2Kvu3tvMCjt4ffTRR1KhQgUJprBrowKzMgSKgZHC00XDRK19qEZQhR2dD2HwYO00a9bMXmxYtuvWrVNTS1huCLLwwQcfKCsEF0QG4d30NFMLXrly5ZS7YuLEiXLx4kUVOEOHqUuPiatA1Lgf03tcNWrUEFiBCKYMkdcXQvQhDxzPizBvyHf8+PFy0003qVsQdWjQoEHSrl07ueWWW9IEuzbmgSASWSHsCJ6RXjm1OwERjeAuQfQkY1toyzo9V0xWWOzoO67aBIHPUTa4ZRBExDmodiCEHWKK8H3oj3DRQOR79OghAwcOdAirCMEPtMVudI9hxjl79mwVcUr3SR+0gbeGMIGgCju4OYs44lTGxw+TypUrK7HXlgcs4169ekliYqISnJw5c9qtZy3sW7dulfj4eKlZs6YkJSVJnjx5vA56rP3DRlHS7arDxPXu3dvhRTWGiMO/nQXQaGEjnmp6eWgLPz0h8ofF7swb+bpKF4MoRPLpp59WAgqu2po3g8WOwR7tAfeYMSat8V30NFAa782MxY42Q1kQYB0RwOD6MIOwuzNY0hvc0ltPCGGdi7iiB13YnV0D8JtCRGCtI+wdXB7nzp+XPHlyS2xsNtVAzpGJtDAVL15c+vTu7XNQC1cxPI09wd3U2vgcFgyd/cOBEnbnxVO9kOdN73UlYM7Crv+PgbV69WpqoMWMAsHG/Wmx68U+Y7n14qonH7u7NgmEsDuLHWZuOt6ucfBAHNnr169Lhw4dlNAH22L3ZWDTA/zly5fTdKPs2bMLDCteoUMg6MKufdWFChWSjh07yooVK1SMU+3LBkpYjvCdLl26VPbu3avoGl+uzFqyzsJu3GEA0cSLjYDa/rTYnfPQOyy8sdjhcjK6rnx58byx2DG4ItA1XEyw0jGQYPFYt4m/LHZYtsZ6oO1//PFHuwsuvdcoKy12xNoFD3DGZbFYJN9NNykDwiie+A5rKhB0WO5mEHYEZ0esWhhJvCKHQNCFHajh90UU+yFDhqitgliw1L5xLdqwGCCw+HvXrl1q2qutpswK+5EjR1TeWsiwmAoXEHzRsBxffPFFl/5c+DARLcmdj10vwHbq1EkwcKWXhy/CnpldMa587MZywscO8X/qqacc3gIMpFOnTlU7hNwJO9oO7WLcYheoXTFm8rHrwRh+dogo1lZgnGB9xegmymofO9aAEFjdWx+7p62dkSOLoV9TUwg7hBSWDqb6cGlgQVWLA0QXovfuu+/at4ihw44ZM8Zvwo78YV01bNjQwYLUW8iQP2YMWJSDBR8dHW3fDui8KwYvc+nSpVXPcN4V4ykPT1PnzA5gKJN2fbkr5//93/8pixm7KTDA4oLwwz2GWQu2PWJAwxZI8EGMV+2ewYIrdqNolxk+D5SwI21Xu2IgTrocWbUrxjjLwo4c+NfRVxYvXhw0Yc/Irhj0L7piQl/U1azy7NmzVjNUBS8prAvsCTZurdMLl9iG2KpVK0FcUfwYBFaRvyx21B+DBSxvDCoQZrgesNiJYNRYtHW1j33SpEnKGoKl5m5/OL7DD5UwGHjKA8KOQQSWPX68oy899b92/boaWDJjsXsqJ1wcAwYMUOXQA5R2l8FaR9voe7BI3bJlSzWAoU30/nFjfwqksHuzjz09nnCl6Cuzi6fa8EhOTlYDI/aPO/9oLCssdu5jN4OaBb8MphF2/ZLCN1myZEkHMpjWYooLXycW8WBZY6ESPl/4Dv1hyUK8Nm3erPJB2hhIunXrJo0bN7bvrPHHL0/Ty0P/2EWvI2gIej0hV65cStgD+ctTuGrgToEwGbfIwUqHD1xvQT1x4oQaCOGKcv7FZ1YJu54VoUzufnkKQ8FXnr7+8tR5XQSuQvzqE4aHP1wx/OVp8IUy1EpgGmEPNXBmLa9xUdZYRl92zpihbu4GOW9/hm+GOnhbBne+bW93CHmbD++LHAIU9jBra73w61wtX3bOmAEJXBoXLlwQq9XRUwi3VN68eb36fYIZ6uFNGdz5tuG+yxsX5/P2XW/y5D3hTYDCHt7ty9qRAAlEIAEKewQ2OqtMAiQQ3gQo7OHdvqwdCZBABBKgsEdgo7PKJEAC4U2Awh7e7cvakQAJRCABCnsENjqrTAIkEN4EKOzh3b6sHQmQQAQSoLBHYKOzyiRAAuFNgMIe3u3L2pEACUQgAQp7BDY6q0wCJBDeBCjs4d2+rB0JkEAEEshyYf/ylxSZ+n2yLGwXKzlispZ4YopIt88SVaYfPh4rsamntmZtQZgbCZAACQSQQJYKO45z6v5ZopS/PUpeqBwdwGoFJumE6yJtFyZKnbujZGCN0Ct/YKgwVRIgAbMRyFJh/+2sVbp+liiTmsVKqVssZmPhsTwUdo+IeAMJkIAJCPhd2P+9YpU/zos8UCitcH+8J1m++DkljRtkw28p8traJDl8xip5slukz8PR8lK1aLur5GqSyIj/JcmHO5MlMVmkRrEoGdsoRu7Kb8tDC27Fwha5dF0E+eC+eW1jpeG9UbLjRIq0+ThJzl+1HQHb6v4oVQZ96eer3mmRZQdSBAMQ0v6oVay9HnDhLN2fkqbJZreOleYlo1QZDv2dIuVuj6KLxwQdm0UggUgm4DdhP/C3VUZvSZLlB1JkaJ2YNK4WiHP7RYnyRNkoebJsqhsDItp6YaL0rBQt7cpEyY9/WeWFlUnSv1q0dKkQLZDiN9cnybrDKUpo8+UQeXVtkpy+KPJp+1iJy5Yq7D/+Zcu7fdlouZ5slXw5LWlE1uhjdxb205esMq1FjBTOa1F5HPrHKiufjpVbcjsOIK5cMX9fsspjsxPl4nVRde9cIVqVjRcJkAAJZDWBTAk7FiO/P5Eig9clyW9nRR4vFaUEuuQtFnG213/6yyo9lifKx+1i7ZY2KgtruufyJAfrePsfNsv44Tui5GSCVZrMTZS368co6xsXBoPenyfJqMdilEWtLW64d8Y2jkmTtxFqesJuFGzk0WxeorzfNEZq32XL15MrBjy+OmxbHN52PEUa3xclbzyaOrPI6sZlfiRAApFJIFPC/vnBFOm6NFEG1oiRF6tEp7vL5f1tyfLDyRSZ8Xisg/BCDAd+mSSfHUiRmsUsSgyblEi1diH8nZdC+GOkYmHX21g8CW5GhF2n2fL+KHm2km2G4Us+sODhXvrqiFUWP+m+7JHZ7VhrEiCBQBLIlLBD6BbvTZZ3NiVLnmw2F0SbMmldELiv0+JE6VUp2m51O1cKFvKaX1Nk1q5kOXtFZEFbmxiGkrDDbXT0rFUmfJusBqq78ou8VT9GKhWm3z2QnZhpkwAJOBLIlLDrpGB1bzmWIsM3JMnBv63Kz62tXNzzzXGbu2bRE6n+av0s9rXDTaMtfojjy18kyYVrVrXA6coVgwXaD7YlS8fy0cqt44slnRlXjF4nqFIk7XZHlOmJT5Jk76kUtYaA+ujFXXY6EiABEshKAn4Rdl1giDKE/exVq1Qtkuo2eWN9krplRL20v0iC6D+1KEleqxmtFj3/TLBKnxWJyq89pHaMw+Lp9BYYGERGbU6Wo+esMqeN4+KpN/vL0xN2lNu4QHv8vFWWtI+VAjlTVwxe+iJJ9p62ypzWMRJzo4pYXD1/VWTj0RSpfXcUF02zsgczLxIggTQE/CrsrvjC19zuk0TlkjCKvXEwWPNLiryuFmCtyk8Pi3d4vRi7QDpvd2xcIkpGNoiR2+M871ZBPs7bHXXe2P2yrnOs2mKJHx7ljBU5ds6qynHfzbbtjs777TGD6LQkSXb/mSKx0ZJmdsI+RgIkQALBJhBwYYcQYgvjo3dFZfkRAt7C9cWV422avI8ESIAEgkUg4MIerIr5ki+F3RdavJcESMDsBCjsPm5jNHuDsnwkQAIkQGFnHyABEiCBMCNAYQ+zBmV1SIAESIDCzj5AAiRAAmFGgMIeZg3K6pAACZAAhZ19gARIgATCjMD/A9aNqBm5iNrvAAAAAElFTkSuQmCC)",
                        "background-repeat":"no-repeat"
                    }
                })
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon7")
                .setTips("Clear All")
                .setLeft("45.75em")
                .setTop("3.3333333333333335em")
                .setImageClass("xui-uicmd-remove")
                .setIconFontSize("2em")
                .setIconColor("#0000FF")
                .onClick("_xui_ui_icon7_onclick")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input16")
                .setName("GOOGLE_OAUTH_CLIENT_ID")
                .setDataBinder("databinder_1")
                .setDataField("GOOGLE_OAUTH_CLIENT_ID")
                .setShowDirtyMark(false)
                .setLeft("23.25em")
                .setTop("26.5em")
                .setWidth("25em")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1")
                .setName("signInMethods")
                .setDataBinder("databinder_1")
                .setDataField("signInMethods")
                .setRequired(true)
                .setShowDirtyMark(false)
                .setItems([
                    {
                        "id":"EmailPassword",
                        "caption":"EmailPassword"
                    },
                    {
                        "id":"Github",
                        "caption":"Github"
                    },
                    {
                        "id":"Google",
                        "caption":"Google"
                    },
                    {
                        "id":"Facebook",
                        "caption":"Facebook"
                    },
                    {
                        "id":"Twitter",
                        "caption":"Twitter"
                    },
                    {
                        "id":"Microsoft",
                        "caption":"Microsoft"
                    },
                    {
                        "id":"Anonymous",
                        "caption":"Anonymous"
                    },
                    {
                        "id":"Phone",
                        "caption":"Phone"
                    }
                ])
                .setLeft("16.166666666666668em")
                .setTop("21.75em")
                .setWidth("32.083333333333336em")
                .setHeight("4.583333333333333em")
                .setSelMode("multibycheckbox")
                .setLabelSize("1.5em")
                .setLabelPos("none")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("EmailPassword;Github;Google")
                .setCustomStyle({
                    "ITEMS":{
                        "overflow":"hidden"
                    }
                })
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3")
                .setLeft("14.75em")
                .setTop("28.583333333333332em")
                .setWidth("33.416666666666664em")
                .setHeight("1.6666666666666667em")
                .setCaption("Only if you want to support Google One-tap sign-up")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FF0000",
                        "font-style":"italic"
                    }
                })
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setName("apiKey")
                .setDataBinder("databinder_1")
                .setDataField("config.apiKey")
                .setRequired(true)
                .setShowDirtyMark(false)
                .setLeft("17.416666666666668em")
                .setTop("6.5em")
                .setWidth("30.833333333333332em")
                .setValue("AIzaSyC2Bqk0ddNtUa4UOhgJS9fpUq_3bRG1rck")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10")
                .setName("authDomain")
                .setDataBinder("databinder_1")
                .setDataField("config.authDomain")
                .setRequired(true)
                .setShowDirtyMark(false)
                .setLeft("17.416666666666668em")
                .setTop("8.5em")
                .setWidth("30.833333333333332em")
                .setValue("crossui.firebaseapp.com")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input11")
                .setName("databaseURL")
                .setDataBinder("databinder_1")
                .setDataField("config.databaseURL")
                .setRequired(true)
                .setShowDirtyMark(false)
                .setLeft("17.416666666666668em")
                .setTop("10.5em")
                .setWidth("30.833333333333332em")
                .setValue("//crossui.firebaseio.com")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input12")
                .setName("projectId")
                .setDataBinder("databinder_1")
                .setDataField("config.projectId")
                .setRequired(true)
                .setShowDirtyMark(false)
                .setLeft("17.416666666666668em")
                .setTop("12.5em")
                .setWidth("30.833333333333332em")
                .setValue("crossui")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input13")
                .setName("storageBucket")
                .setDataBinder("databinder_1")
                .setDataField("config.storageBucket")
                .setShowDirtyMark(false)
                .setLeft("17.416666666666668em")
                .setTop("14.5em")
                .setWidth("30.833333333333332em")
                .setValue("crossui.appspot.com")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14")
                .setName("messagingSenderId")
                .setDataBinder("databinder_1")
                .setDataField("config.messagingSenderId")
                .setShowDirtyMark(false)
                .setLeft("17.416666666666668em")
                .setTop("16.5em")
                .setWidth("30.833333333333332em")
                .setValue("20598955141")
            );
            
            host.xui_ui_form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input15")
                .setName("appId")
                .setDataBinder("databinder_1")
                .setDataField("config.appId")
                .setRequired(true)
                .setShowDirtyMark(false)
                .setLeft("17.416666666666668em")
                .setTop("18.5em")
                .setWidth("30.833333333333332em")
                .setValue("1:20598955141:web:f86e98e32c1ffcdaf61dec")
            );
            
            host.xui_ui_dialog1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setLeft("42.5em")
                .setTop("34.75em")
                .setWidth("5.75em")
                .setCaption("O K")
                .onClick("_xui_ui_button9_onclick")
            );
            
            host.xui_ui_dialog1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("34.083333333333336em")
                .setTop("34.75em")
                .setWidth("5.75em")
                .setCaption("Cancel")
                .onClick("_xui_ui_button10_onclick")
            );
            
            host.xui_ui_dialog1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2")
                .setLeft("1.5833333333333333em")
                .setTop("0.75em")
                .setCaption("Copy the following fields from your Firebase SDK snippet")
                .setHAlign("left")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _xui_ui_button10_onclick:function(profile, e, src, value){
            this.xui_ui_dialog1.destroy();
        },
        _xui_ui_button9_onclick:function(profile, e, src, value){
            var ns = this, binder=ns.databinder_1;
            if(ns.xui_ui_form.checkRequired(false, null, true)){
                binder.updateDataFromUI();
                var values = binder.getData();
                ns.callback({ "conf" : xui.unserialize(values) });
            }
            this.xui_ui_dialog1.destroy();
        },
        _xui_ui_icon7_onclick:function(profile, e, value){
            var ns = this;
            ns.xui_ui_input9.setValue("");
            ns.xui_ui_input10.setValue("");
            ns.xui_ui_input11.setValue("");
            ns.xui_ui_input12.setValue("");
            ns.xui_ui_input13.setValue("");
            ns.xui_ui_input14.setValue("");
            ns.xui_ui_input15.setValue("");
        }
    },
    Static:{
        viewStyles:{ }
    }
});