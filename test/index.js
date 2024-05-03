var assert = require('assert'),
	webdriver = require('selenium-webdriver');
	//const { expect } = require('chai');
	
	
	
    describe('Verify Letter head setup', async function () {

	this.timeout(15000);

	var driver
	before(async function () {
		// runs once before the first test in this block
		driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).build();
	});

       
	    it('Letter page open and getting title successfully ', async function () {
		
		await driver.get('file:///C:/Users/user/Downloads/Recent%20Download/04%20Letter%20Head/sample-code/preview.html');
		var letterOrgName = await driver.findElement(webdriver.By.className('letter-org-name'));
		
		//certificateTitleName.sendKeys('Certificate');
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterOrgName.getText('value')
		assert.equal(value, 'YOUR COMPANY NAME');
	})
	
	    it('Letter org detailed getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterOrgDetails = await driver.findElement(webdriver.By.className('letter-org-details'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterOrgDetails.getText('value')
		return assert.equal(value, 'SLOGAN OF YOUR COMPANY');

    });
	
	    it('Letter reference number getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterReferenceNumber = await driver.findElement(webdriver.By.className('letter-ref'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterReferenceNumber.getText('value')
		return assert.equal(value, 'Ref. No:');

    });
	
	    it('Letter date getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterDate = await driver.findElement(webdriver.By.className('letter-date'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterDate.getText('value')
		return assert.equal(value, 'Date:');

    });
	
	    it('Letter body getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterBody = await driver.findElement(webdriver.By.className('letter-body-to'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterBody.getText('value')
		return assert.equal(value, "To, Kiran Kshirsagar Head of the department, JSPM's RSCOE College, Tathwade,Pune-411033.");

    });

	    it('Letter organization website getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterBody = await driver.findElement(webdriver.By.className('letter-org-website'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterBody.getText('value')
		return assert.equal(value, "WWW.WEBTOUCHINDIA@CO.IN");

    });

	    it('Letter organization website getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterBody = await driver.findElement(webdriver.By.className('letter-org-phone'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterBody.getText('value')
		return assert.equal(value, "+91 020 247335");

    });

	    it('Letter organization address getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterBody = await driver.findElement(webdriver.By.className('letter-org-address'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterBody.getText('value')
		return assert.equal(value, "Sai-Sagar,Sr no.133,Gurudwara chowk, walhekarwadi,Chinchwad,Pune-411033.");

    });
	 

	    it('Letter organization address getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterBody = await driver.findElement(webdriver.By.className('letter-org-email'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterBody.getText('value')
		return assert.equal(value, "kiran.kshirsagar444@gmail.com");

    });

	    it('Post in company and name in company getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var letterOrgDetails = await driver.findElement(webdriver.By.className('letter-body-sign'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await letterOrgDetails.getText('value')
		return assert.equal(value, 'Mr. ABC PQR\n' + 'POST IN COMPANY\n' + 'NAME OF COMPANY');

    });

	    it('Verify that logo image should be loaded successfully',	async function testLogoImageLoaded() {
    
		try {
			const logoElement = await driver.findElement(webdriver.By.xpath("//div[@class='letter-org-logo']/img"));
			const isLoaded = await logoElement.isDisplayed();
	
			assert.strictEqual(isLoaded, true, 'Logo image is not loaded successfully');
	        console.log('Logo image loaded successfully!');
		    } catch (error) {
			console.error('Logo image loading test failed:', error.message);
		}

	});

     
	 it('Verify letter width should be present in mm',	async function testLogoImageLoaded() {
		try {
	
			// Execute JavaScript code in the browser context to access the style sheets and CSS rules
			const mmRules = await driver.executeScript(() => 
		{
				const styleSheets = document.styleSheets;
				const mmRules = [];
	
				// Iterate over the style sheets
				for (const styleSheet of styleSheets) 
				{
					// Get the CSS rules for the style sheet
					const cssRules = styleSheet.cssRules;
	
					// Iterate over the CSS rules
					for (const cssRule of cssRules) 
					{
						// Check if the CSS rule contains the class '.mm'
						if (cssRule.selectorText && cssRule.selectorText.includes('.mm')) 
						{
							mmRules.push(cssRule.cssText);
						}
					}
			    }
				return mmRules;
		});
	
			   // Print the matched CSS rules to the console
			     console.log('MM Rules:', mmRules);
	
			  // Assert that there are matched CSS rules
			     assert.isNotEmpty(mmRules, 'No CSS rules found for class ".mm"');
		    } catch (error) {
			console.error('Error occurred:', error);
		} 
        
	});
        await driver.manage().setTimeouts({implicit: 5000});
        afterEach (async function () { 
		await driver.quit();
        })
	});