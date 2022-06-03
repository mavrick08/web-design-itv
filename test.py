from selenium import webdriver
from selenium.webdriver.common.keys import Keys
driver = webdriver.Chrome()
driver.get('https://demo.seleniumeasy.com/basic-first-form-demo.html')
driver.implicitly_wait(5)
# my_element = driver.find_element_by_id('edit-submit')
# my_element.click()
try:
    no_button = driver.find_element_by_class_name('at-cm-no-button')
    no_button.click()
except:
    print("No element with this class Name Found ")
sum1 = driver.find_element_by_id('sum1')
sum2 = driver.find_element_by_id('sum2')
sum1.send_keys(12)
sum2.send_keys(13)

btn = driver.find_element_by_css_selector('button[onclick="return total()"]')
btn.click()