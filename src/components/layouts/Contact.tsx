"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 tracking-wider">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            現在、こちらからのお問い合わせは受け付けておりません。
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="お名前" />
                  </div>
                  <div>
                    <Input type="email" placeholder="メールアドレス" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="メッセージ"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">送信する</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">メール</h3>
                    <p className="text-muted-foreground">contact@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">電話</h3>
                    <p className="text-muted-foreground">03-1234-5678</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">所在地</h3>
                    <p className="text-muted-foreground">京都府京都市</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
