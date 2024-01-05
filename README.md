# bangla to Python

## গিটহাব পেইজ : 
[<b>```বাংলা থেকে পাইথন```</b>](https://anisurrahmanlikhon.github.io/Bangla-to-Py-Code/)
## ডকুমেন্টেশন

### সিনট্যাক্স 

```Python
দেখাও("ওহে বিশ্ব")
```
### ইনপুট ও আউটপুট

```Python
দেখাও ("একটি সংখ্যা নিই:")
সংখ্যা=নাও()
দেখাও(সংখ্যা)
```

### ডেটা টাইপ

- পূর্ণসংখ্যা  ```int```
-  দশমিক ```float```
- "বাক্য"  ```string```
- সত্য/মিথ্যা ```bool```

```Python
দেখাও(টাইপ(২৫))
দেখাও(টাইপ(২৫.৫))
দেখাও(টাইপ("আনিছ"))
দেখাও(টাইপ(সত্য))
```

```Python
সংখ্যা = ১০০
সিজিপিএ = ৫.০০
বর্ণ = 'A'
হিসাব = ১২৩৪৫.৬৭৮৯০
নাম = "মোঃ আনিছুর রহমান"
বুল = সত্য
   
দেখাও(সংখ্যা)
দেখাও(সিজিপিএ)
দেখাও(বর্ণ)
দেখাও(হিসাব)
দেখাও(নাম)
দেখাও(বুল)
```
### ডেটা টাইপ মেমোরির সাইজ

|চলক    |পাইথনে সাইজ / বাংলাতে সাইজ         |
|-----------------|-------------------|
| ```পূর্ণসংখ্যা```       | ২-৪ বাইট/প্রযোজ্য নয়        |
| ```দশমিক```       | ২-৪ বাইট/প্রযোজ্য নয়        |
| ```অক্ষর```      | ১ বাইট/প্রযোজ্য নয়       |
|```বাক্য```|ক্যারেক্টার অ্যারের সাইজ অনুযায়ী/প্রযোজ্য নয় |

### শর্ত বা কন্ডিশন
if elif else
```Python
বার = "সোমবার"
টাকা = ৫০০

যদি বার == "শুক্রবার" এবং টাকা == ৫০০:
    দেখাও("আমি মসজিদে যাব ও টাকা দান করব")
নাহয়যদি বার == "শনিবার" এবং টাকা > ৫০০:
    দেখাও("আমি বাজার করতে যাব")
নাহয়যদি বার == "শনিবার" এবং টাকা < ৫০০: 
    দেখাও("আমি স্কুলে যাব")
নাহলে:
    দেখাও("আমি কোথাও যাব না")
```
### লুপ
while loop:
```Python
ক = ১;
যতক্ষণ ক < ১০:
    দেখাও(ক)
    ক = ক + ১
```
for loop:
```Python
লুপ ক রেঞ্জের মধ্যে(১, ১০):
    দেখাও(ক) 
```
break, continue statement:
```Python
লুপ ক রেঞ্জের মধ্যে(১, ২০):
    যদি ক % ২ == ০:
        বাদ
    যদি ক == ১১:
        থামো
    দেখাও(ক)
```
### লিস্ট ও টাপল
List:
```Python
ফলসমূহ = ["আম", "কাঁঠাল", "জাম"]
দেখাও(ফলসমূহ)
দেখাও(ফলসমূহ[০])
দেখাও(ফলসমূহ[১])
দেখাও(ফলসমূহ[২])
দেখাও("-------------")
লুপ ক রেঞ্জের মধ্যে(৩):
    দেখাও(ফলসমূহ[ক])

```
Tuple:
```Python
পরিচিতি = ["আনিছুর", 29, "বাংলাদেশ"]
দেখাও(পরিচিতি[0] + " "  + পরিচিতি[2] +  " এ থাকে")
```
### ডিকশনারি
```Python
ফোনবুক = {
'আনিছ':'০১৭৫৬xxxxxx',
'লিখন':'০১৯৫২xxxxxx',
'কবি':'০১৫৬৮xxxxxx',
'লেখক':'০১৮৫৬xxxxxx',
}
দেখাও("কবির ফোন নং: " + ফোনবুক['কবি'])
```
### ফাংশন
```Python
ডিফাইন বর্গ(ক):
    ফেরত ক * ক
দেখাও(বর্গ(৯))
```
রিকার্সিভ ফাংশন:
```Python
ডিফাইন ফ্যাক্টরিয়াল(ক):
    যদি ক == ১:
        ফেরত ১
    নাহলে:
        ফেরত ক * ফ্যাক্টরিয়াল(ক - ১)
দেখাও(ফ্যাক্টরিয়াল(৫))
```
### ক্লাস ও অবজেক্ট ডিফাইন
```Python
ক্লাস ক্যালকুলেটর:
    ডিফাইন সেট(একই, ক, খ):
        একই.ক = ক
        একই.খ = খ
    ডিফাইন যোগ(একই):
        ফেরত একই.ক + একই.খ
প্রথম = ক্যালকুলেটর()
দ্বিতীয় = ক্যালকুলেটর()

প্রথম.সেট(২৫,২৫)
দ্বিতীয়.সেট(৫০, ৫০)

দেখাও(প্রথম.যোগ())
দেখাও(দ্বিতীয়.যোগ())
```
### ইনহেরিটেন্স
```Python
ক্লাস ক্যালকুলেটর:
    ডিফাইন সেট(একই, ক, খ):
        একই.ক = ক
        একই.খ = খ
    ডিফাইন যোগ(একই):
        ফেরত একই.ক + একই.খ
ক্লাস নতুন_ক্যালকুলেটর(ক্যালকুলেটর):
   ডিফাইন গুণন(একই):
        ফেরত একই.ক * একই.খ
গ = নতুন_ক্যালকুলেটর()
গ.সেট(৩, ৫০)
দেখাও(গ.গুণন())
```
### পলিমর্ফিজম
```Python
ক্লাস প্রাণী:

    ডিফাইন --ইনিশিয়াল--(একই, নাম):
        একই .নাম = নাম

    ডিফাইন ডাক(একই):
        পাস_করো

ক্লাস বিড়াল(প্রাণী):

    ডিফাইন ডাক(একই):
        দেখাও(একই .নাম + ": মিয়াও মিয়াও!")

ক্লাস কুকুর(প্রাণী):

    ডিফাইন ডাক(একই):
        দেখাও(একই .নাম + ": ঘেউ ঘেউ!")

ক্লাস বাঘ(প্রাণী):

    ডিফাইন ডাক(একই):
        দেখাও(একই .নাম + ": হালুম হালুম!")

ক্লাস ইঁদুর(প্রাণী):

    ডিফাইন ডাক(একই):
        দেখাও(একই .নাম + ": কিচ্ কিচ্!")


বিলাই = বিড়াল("বিলাই")
কুত্তা = কুকুর("কুত্তা")
বাঘা = বাঘ("বাঘা")
ইন্দুর = ইঁদুর("ইন্দুর")

বিলাই.ডাক()
কুত্তা.ডাক()
বাঘা.ডাক()
ইন্দুর.ডাক()
```
### পাইথন মডিউলস 
গণিত মডিউল:
```Python
অন্তর্ভুক্ত গণিত
দেখাও(গণিত. ফ্যাক্টো(৫))
দেখাও(গণিত. গসাগু(১৫, ৯))
দেখাও(গণিত. সর্বোচ্চ(৫.৯৫))
দেখাও(গণিত. সর্বনিম্ন(৫.৯৫))
দেখাও(গণিত. বর্গমূল(৬৪))
দেখাও(গণিত. ঘনমূল(২৭))
দেখাও(গণিত. ঘাত(৩, ২))
দেখাও(গণিত. পরম(-১০.০০))
দেখাও(গণিত. সূচক(৪.০০))
দেখাও(গণিত. লগ(৩০.৯৭))
দেখাও(গণিত. ছাঁটাই(৪.০০));
দেখাও(গণিত. ভাগশেষ(৮, ৫))
দেখাও(গণিত. ভুজ(৩০.০০))
দেখাও(গণিত. কোটি(৩০.০০))
দেখাও(গণিত. স্পর্শক(৩০.০০))
দেখাও(গণিত. পাই)
```
রান্ডাম মডিউল
```Python
অন্তর্ভুক্ত রান্ডাম
সংখ্যা = রান্ডাম. রান্ডাম()
দেখাও(সংখ্যা)
লিস্ট১ = [০,১,২,৩,৪,৫,৬,৭,৮,৯]
দেখাও(রান্ডাম. পছন্দ(লিস্ট১))
লিস্ট২ = ["আপেল", "কমলা", "জাম"]
রান্ডাম. শাফল(লিস্ট২)
দেখাও(লিস্ট২)
দেখাও(রান্ডাম. রেন্ডরেঞ্জ(২০, ৫০, ৩))
রান্ডাম.সীড(৫)
দেখাও(রান্ডাম. ইউনিফর্ম(৫, ১০))
দেখাও(রান্ডাম. রেন্ডিন্ট(৫, ১০))
```

### বাংলা প্রোগ্রামিং

[<b>```বাংলা প্রোগ্রামিং```</b>](https://bangla-programming.vercel.app)

### বা</>কোডিং- বাংলায় কোডিং শিখুন
```জাভা স্ক্রিপ্ট``` সম্বলিত, ```চা-স্ক্রিপ্ট``` থেকে নির্মিত আমার [<b>```বা</>কোডিং```</b>](https://anisurrahmanlikhon.github.io/Ba-Coding/)


### বাংলা পাইথন ইডিটর
<b>```বাংলা পাইথন ইডিটর```</b> তৈরীর কাজ চলতেছে। আমরা শীঘ্রই <b>```বাংলা পাইথন ইডিটর```</b> কে নিয়ে হাজির হবো ইনশাল্লাহ।



