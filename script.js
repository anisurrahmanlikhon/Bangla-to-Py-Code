
		
		function convertToC() {
			const banglaCode = document.getElementById('banglaCode').value;
			const convertedCode = translateToC(banglaCode);
			document.getElementById('convertedCode').innerText = convertedCode;
		}

		function translateToC(banglaCode) {
			// Replace Bangla keywords with corresponding C keywords
			const mapping = {
				
				'অন্তর্ভুক্ত': 'import',
				

				
				'নাও': 'input',
				'দেখাও': 'print',
				'ফেরত': 'return',

				'০': '0',
				'১': '1',
				'২': '2',
				'৩': '3',
				'৪': '4',
				'৫': '5',
				'৬': '6',
				'৭': '7',
				'৮': '8',
				'৯': '9',

				
                                'যদি': 'if',
				'নাহলে': 'else',
				'নাহয়': 'el',

				'লুপ': 'for',
				'রেঞ্জের মধ্যে': 'in range',
				'যতক্ষণ': 'while',
				

				'থামো': 'break',
				'বাদ': 'continue',
				

				'সত্য': 'true',
				'মিথ্যা': 'false',

				'হয়': 'is',
				
				'এবং': 'and',
				'অথবা': 'or',
				'সমান-নয়' : 'not',

                                'ক্লাস':'class',
				'ডিফাইন': 'def',
				

			

				
			};

			// Replace Bangla words with English keywords using javascript
			for (const [banglaWord, englishWord] of Object.entries(mapping)) {
				banglaCode = banglaCode.replace(new RegExp(banglaWord, 'g'), englishWord);
			}

			// Translate Bangla sentences in double quotation to English
			banglaCode = banglaCode.replace(/"([^"]*)"/g, (match, p1) => `"${translateToC(p1)}"`);

			return banglaCode;
		}

		function copyToClipboard() {
        const convertedCode = document.getElementById('convertedCode');
        const codeTextarea = document.getElementById('code');

        // Copy code to clipboard
        const range = document.createRange();
        range.selectNode(convertedCode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Copy and Paste code in Compiler');

        // Paste the copied code into the compiler textarea
        
    }







